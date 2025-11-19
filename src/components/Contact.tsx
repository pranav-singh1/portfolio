import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto min-h-[70vh] flex flex-col justify-between bg-black text-white -mx-6 md:-mx-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
      <div className="space-y-12">
        <div className="border-b border-white/20 pb-8">
          <h3 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter italic">
            Let's Build
          </h3>
        </div>
        
        <div className="space-y-8">
          <a 
            href="mailto:psingh99@wisc.edu" 
            className="block font-display text-3xl md:text-6xl uppercase tracking-wide hover:text-neutral-400 transition-colors animate-pulse-fast"
          >
            psingh99@wisc.edu
          </a>
          
          <div className="flex flex-col md:flex-row gap-8 pt-8">
            <a href="#" className="font-mono text-sm uppercase tracking-[0.2em] hover:line-through decoration-white">
              LinkedIn
            </a>
            <a href="#" className="font-mono text-sm uppercase tracking-[0.2em] hover:line-through decoration-white">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <footer className="flex justify-between items-end mt-24 font-mono text-xs uppercase tracking-widest text-neutral-500">
        <div>
          <p>© {new Date().getFullYear()} Pranav Singh</p>
          <p>Madison, WI</p>
        </div>
        <div className="text-right">
          <p>Narcissist Aesthetic</p>
          <p>V.1.0</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
