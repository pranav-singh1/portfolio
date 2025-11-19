import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "Java", "SQL"] },
    { name: "Frameworks", items: ["React", "Next.js", "FastAPI", "Flask"] },
    { name: "ML / Data", items: ["scikit-learn", "XGBoost", "PyTorch", "Feature Eng", "Pipelines"] },
    { name: "Infra", items: ["PostgreSQL", "Supabase", "Docker", "Linux", "CI/CD"] }
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto border-t border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="font-display text-4xl font-bold uppercase tracking-tighter italic mb-8">
            Technical Arsenal
          </h3>
          <p className="font-mono text-xs leading-relaxed max-w-xs uppercase tracking-widest text-neutral-500">
            // Full stack capabilities<br/>
            // Data Science focus<br/>
            // High performance
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest border-b border-black pb-2">
                {category.name}
              </h4>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium uppercase tracking-wide hover:translate-x-2 transition-transform duration-200 cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
