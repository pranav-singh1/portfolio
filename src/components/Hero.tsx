import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-screen-xl mx-auto relative overflow-hidden">
      
      {/* Decorative racing lines */}
      <div className="absolute top-1/4 right-0 w-64 h-1 bg-black transform translate-x-32 rotate-45 opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-1 bg-black transform -translate-x-32 -rotate-12 opacity-10"></div>

      <div className="space-y-6 relative z-10">
        <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter italic animate-slide-up opacity-0">
          Software Engineer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-600">
             / AI & ML
          </span>
        </h2>
        
        <div className="max-w-2xl space-y-6 mt-12 animate-slide-up-delay opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800 border-l-2 border-black pl-6">
            I build systems that combine <span className="font-bold">software engineering</span>, <span className="font-bold">applied machine learning</span>, and <span className="font-bold">statistical modeling</span>.
          </p>
          <p className="text-sm md:text-base font-mono tracking-widest text-neutral-500 uppercase">
            [ Reliability // Performance // Design ]
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
