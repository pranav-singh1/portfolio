import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Particles from './components/Particles';

export default function App() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
