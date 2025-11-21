import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Palette } from 'lucide-react';
import { BIO, EXPERIENCE, PROJECTS, SKILLS, SOCIALS, SEEKING, COURSEWORK, CURRENTLY } from './data';

/**
 * SHADER SOURCE CODE
 * This GLSL code runs on the GPU to create the liquid melt effect.
 */
const vertexShaderSource = `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision highp float;
    
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform int u_mode; // 0 = Blue/Pink, 1 = Green/Thermal, 2 = Monochrome

    // Simplex Noise functions
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    // FBM for the melting effect
    float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 5; i++) {
            value += amplitude * snoise(p);
            p *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }

    void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        // Vertical Melt Warping
        vec2 q = vec2(0.);
        q.x = fbm( st + 0.05 * u_time);
        q.y = fbm( st + vec2(1.0));

        vec2 r = vec2(0.);
        r.x = fbm( st + 1.0*q + vec2(1.7,9.2) + 0.15*u_time );
        r.y = fbm( st + 1.0*q + vec2(8.3,2.8) + 0.126*u_time);

        float f = fbm(st + r);

        vec3 color = vec3(0.0);
        
        if (u_mode == 0) {
            // --- MODE 0: NEON CONCERT (Blue/Pink) ---
            vec3 c_deep = vec3(0.1, 0.0, 0.3);    // Deep Indigo
            vec3 c_mid = vec3(0.6, 0.0, 0.8);     // Vivid Purple
            vec3 c_high = vec3(1.0, 0.4, 0.9);    // Hot Pink
            vec3 c_white = vec3(1.0, 0.9, 1.0);   // White

            float contrast_f = f * 1.9;

            color = mix(c_deep, c_mid, smoothstep(0.0, 0.4, contrast_f));
            color = mix(color, c_high, smoothstep(0.4, 0.7, contrast_f));
            color = mix(color, c_white, smoothstep(0.8, 1.0, contrast_f));
        } else if (u_mode == 1) {
            // --- MODE 1: DIE LIT THERMAL (Green/Orange/Black) ---
            vec3 c_black = vec3(0.0, 0.05, 0.0);
            vec3 c_green = vec3(0.1, 0.9, 0.1);
            vec3 c_fire = vec3(0.9, 0.6, 0.1);
            vec3 c_invert = vec3(0.1, 0.1, 0.8);

            float contrast_f = f * 1.8;

            color = mix(c_black, c_green, smoothstep(0.0, 0.5, contrast_f));
            color = mix(color, c_fire, smoothstep(0.5, 0.8, contrast_f));
            color = mix(color, c_invert, smoothstep(0.9, 1.0, contrast_f));
        } else {
            // --- MODE 2: MONOCHROME (Black/White/Grey) ---
            vec3 c_black = vec3(0.0);
            vec3 c_grey = vec3(0.5);
            vec3 c_white = vec3(1.0);

            float contrast_f = f * 2.0;

            color = mix(c_black, c_grey, smoothstep(0.2, 0.6, contrast_f));
            color = mix(color, c_white, smoothstep(0.7, 1.0, contrast_f));
        }
        
        // Scanlines
        float scan = sin(gl_FragCoord.y * 0.2 + u_time * 10.0) * 0.02;
        color -= scan;

        gl_FragColor = vec4(color, 1.0);
    }
`;

/**
 * Background Component: Handles WebGL
 */
const BackgroundVisuals = ({ mode }: { mode: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>(0);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext('webgl');
        
        if (!gl) return;

        // Shader Compilation Helper
        const createShader = (type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
        
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        // Buffer Setup
        const positionLocation = gl.getAttribLocation(program, "position");
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
        ]), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const timeLoc = gl.getUniformLocation(program, "u_time");
        const resLoc = gl.getUniformLocation(program, "u_resolution");
        const modeLoc = gl.getUniformLocation(program, "u_mode");

        const render = (time: number) => {
            timeRef.current = time * 0.001;
            
            // Responsive resize
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            gl.uniform1f(timeLoc, timeRef.current);
            gl.uniform2f(resLoc, canvas.width, canvas.height);
            gl.uniform1i(modeLoc, mode);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);

        return () => cancelAnimationFrame(requestRef.current);
    }, [mode]);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

/**
 * UI Components
 */
const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 mb-8 mt-12">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-white uppercase border-b-2 border-white pb-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {title}
        </h2>
        <div className="h-[2px] bg-white flex-grow opacity-50 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
    </div>
);

const JobCard = ({ title, company, date, details }: { title: string, company: string, date: string, details: string[] }) => (
    <div className="mb-10 group transition-all duration-300 hover:translate-x-2">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">{title}</h3>
            <div className="font-mono text-sm text-white bg-black/60 px-2 py-1 border border-white/40 backdrop-blur-sm">
                {company} // {date}
            </div>
        </div>
        <ul className="space-y-2">
            {details.map((item, idx) => (
                <li key={idx} className="text-gray-100 text-base md:text-lg pl-4 border-l-2 border-white/50 leading-relaxed drop-shadow-sm font-medium">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard = ({ title, subtitle, desc, stack, link, details }: { title: string, subtitle: string, desc: string, stack: string[], link?: string, details?: string[] }) => (
    <div className="bg-black/50 border border-white/20 p-6 mb-6 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md shadow-lg flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
            <div>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">
                         <h3 className="text-2xl font-black text-white uppercase drop-shadow-lg">{title}</h3>
                    </a>
                ) : (
                    <h3 className="text-2xl font-black text-white uppercase drop-shadow-lg">{title}</h3>
                )}
                <span className="font-mono text-xs text-gray-300 uppercase tracking-widest font-bold">{subtitle}</span>
            </div>
            {link && <a href={link} target="_blank" rel="noopener noreferrer"><ExternalLink className="text-white w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" /></a>}
        </div>
        <p className="text-gray-200 my-4 leading-relaxed font-medium flex-grow">{desc}</p>
        {details && details.length > 0 && (
            <ul className="space-y-2 mb-4">
                 {details.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm pl-3 border-l border-white/30 leading-relaxed">
                        {item}
                    </li>
                ))}
            </ul>
        )}
        <div className="flex flex-wrap gap-2 mt-auto">
            {stack.map((tech, i) => (
                <span key={i} className="text-xs font-mono border border-white/40 px-2 py-1 text-white bg-black/60 font-bold shadow-sm">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

/**
 * Main App Component
 */
const App = () => {
    // 0 = Neon, 1 = Thermal, 2 = Monochrome
    const [mode, setMode] = useState(0);

    const toggleMode = () => {
        setMode(prev => (prev + 1) % 3);
    };

    const getModeName = (m: number) => {
        switch(m) {
            case 0: return 'Visuals: Neon';
            case 1: return 'Visuals: Thermal';
            case 2: return 'Visuals: Mono';
            default: return 'Visuals: Neon';
        }
    };

    return (
        <div className="relative min-h-screen font-sans antialiased selection:bg-white selection:text-black">
            
            {/* 1. BACKGROUND LAYER */}
            <BackgroundVisuals mode={mode} />
            
            {/* 2. OVERLAY EFFECTS (Scanlines & Noise) */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhZWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-20"></div>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-gradient-to-b from-transparent via-black/10 to-black/30 bg-[length:100%_4px]"></div>

            {/* 3. CONTROLS */}
            <button 
                onClick={toggleMode}
                className="fixed top-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-white/40 text-white px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            >
                <Palette size={14} />
                {getModeName(mode)}
            </button>

            {/* 4. MAIN CONTENT SCROLLABLE AREA */}
            <div className="relative z-20 flex justify-center p-4 md:p-12 lg:p-24">
                <div className="w-full max-w-4xl bg-black/50 backdrop-blur-xl border border-white/10 p-8 md:p-16 shadow-2xl">
                    
                    {/* Header */}
                    <header className="mb-16">
                        <div className="font-mono text-xs md:text-sm text-gray-300 mb-4 flex flex-col md:flex-row md:justify-between gap-2 border-b border-white/30 pb-4 font-bold">
                            <span>{BIO.location}</span>
                            <span>{BIO.email}</span>
                            <span className="text-white font-bold animate-pulse">[{BIO.graduation}]</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-gray-100 tracking-tighter leading-[0.8] mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] uppercase">
                            {BIO.name.split(' ').map((word, i) => (
                                <React.Fragment key={i}>{word}<br/></React.Fragment>
                            ))}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-medium shadow-black drop-shadow-md mb-8">
                            {BIO.description}
                        </p>
                        
                        {/* Target Role Statement */}
                        <div className="bg-white/10 border-l-4 border-white p-4 backdrop-blur-sm">
                            <p className="text-white font-bold tracking-tight text-lg">
                                {SEEKING}
                            </p>
                        </div>
                    </header>

                    {/* Coursework & Current Focus */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 border-b border-white/20 pb-2">
                                Relevant Coursework
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {COURSEWORK.map((course, idx) => (
                                    <span key={idx} className="text-sm text-gray-200 bg-black/40 px-2 py-1 border border-white/20">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 border-b border-white/20 pb-2">
                                Current Focus
                            </h3>
                            <div className="space-y-3">
                                {CURRENTLY.focus.map((item, idx) => (
                                    <div key={idx} className="text-sm text-gray-300 pl-2 border-l border-white/30">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <SectionHeader title="Experience" />
                        {EXPERIENCE.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </section>

                    {/* Projects */}
                    <section>
                        <SectionHeader title="Projects" />
                        
                        <div className="flex flex-col gap-6">
                            {/* Render the first project (highlighted) full width */}
                            {PROJECTS.length > 0 && (
                                <ProjectCard {...PROJECTS[0]} />
                            )}

                            {/* Render remaining projects in a grid */}
                            {PROJECTS.length > 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {PROJECTS.slice(1).map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section>
                        <SectionHeader title="Stack" />
                        <div className="space-y-8">
                            {SKILLS.map((category, index) => (
                                <div key={index}>
                                    <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-3 border-l-2 border-white/20 pl-2">
                                        {category.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill, idx) => (
                                            <div key={idx} className="bg-white text-black px-4 py-2 font-bold uppercase text-sm tracking-wider hover:bg-gray-300 cursor-default transition-colors shadow-lg">
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-20 pt-8 border-t border-white/20 flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                             {SOCIALS.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={index}
                                        href={social.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <div className="p-2 border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                                            <Icon size={20} />
                                        </div>
                                        <span className="font-mono text-sm tracking-wider uppercase">{social.text}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default App;
