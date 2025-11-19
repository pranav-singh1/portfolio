import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 text-neutral-400">About</h3>
      <div className="max-w-3xl space-y-8 text-lg md:text-xl font-light leading-relaxed text-neutral-800">
        <p>
          I’m a Computer Science and Data Science student at the University of Wisconsin–Madison. Most of my work sits at the intersection of software engineering, machine learning, and data-driven automation.
        </p>
        <p>
          I’m interested in building practical AI systems, high-performance applications, and statistical models that make real decisions.
        </p>
        <p>
          Currently exploring opportunities in SWE, AI/ML engineering, and quantitative or statistical finance.
        </p>
      </div>
    </section>
  );
};

export default About;

