import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Mobility Labs Apps",
      role: "Software Engineering Intern",
      year: "2023",
      details: [
        "React/TypeScript components used by 500K+ monthly users.",
        "3D visuals, API integrations, and frontend performance improvements."
      ]
    },
    {
      company: "RS Associates",
      role: "Software Intern",
      year: "2022",
      details: [
        "Python and SQL financial pipelines processing 5K+ records monthly.",
        "Automated reporting and validation workflows."
      ]
    },
    {
      company: "Stanford University",
      role: "ML Research Cohort",
      year: "2021",
      details: [
        "Modeling work with logistic regression and random forests.",
        "Selected as 1 of 30 students from 3,000+ applicants."
      ]
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between mb-16 border-b-4 border-black pb-4">
        <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter italic">
          Experience
        </h3>
        <span className="hidden md:block font-mono text-xs tracking-widest">[02]</span>
      </div>

      <div className="space-y-0 border-l-2 border-black ml-2 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 py-12 group">
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-16 w-4 h-4 bg-white border-4 border-black group-hover:bg-black transition-colors duration-300"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 space-y-1">
                <span className="font-mono text-xs font-bold">{exp.year}</span>
                <h4 className="font-display text-2xl font-bold uppercase">{exp.company}</h4>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-tight">{exp.role}</p>
              </div>
              <div className="md:col-span-3 space-y-2">
                {exp.details.map((detail, idx) => (
                  <p key={idx} className="text-lg font-light text-neutral-800 leading-relaxed max-w-2xl">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
