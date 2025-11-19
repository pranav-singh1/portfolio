import React from 'react';

const SelectedWork: React.FC = () => {
  const projects = [
    {
      title: "EchoLearn.ai",
      category: "AI / VOICE",
      description: "AI-powered study assistant with real-time voice interaction.",
      details: ["React/Next.js", "Supabase", "GPT-4", "Vapi", "<350ms Latency"]
    },
    {
      title: "Spotto AI",
      category: "ANALYTICS / ML",
      description: "NBA predictive analytics system using engineered features and XGBoost models.",
      details: ["FastAPI", "XGBoost", "Feature Eng", "60% Win Rate"]
    },
    {
      title: "Focus Helper",
      category: "EXTENSION",
      description: "Chrome extension for distraction blocking.",
      details: ["Chrome API", "JavaScript", "400+ Users", "5.0 Rating"]
    },
    {
      title: "Additional Work",
      category: "R&D",
      description: "Time-series modeling, LLM-based automation pipelines, portfolio analytics, and voice-driven interfaces.",
      details: ["Python", "LLMs", "Finance", "Automation"]
    }
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between mb-16 border-b-4 border-black pb-4">
        <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter italic">
          Selected Work
        </h3>
        <span className="hidden md:block font-mono text-xs tracking-widest">[01]</span>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative border-t border-black pt-8 hover:bg-black hover:text-white transition-all duration-300 ease-out p-6 md:p-10"
          >
            {/* Hover reveal arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest uppercase text-neutral-500 group-hover:text-neutral-400">
                  {project.category}
                </span>
                <h4 className="font-display text-4xl font-bold uppercase tracking-tight group-hover:italic transition-all">
                  {project.title}
                </h4>
              </div>
              
              <div className="md:max-w-md space-y-4">
                <p className="text-lg font-light leading-relaxed group-hover:text-neutral-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.details.map((detail, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-mono border border-neutral-300 group-hover:border-neutral-700 px-2 py-1 uppercase tracking-wider"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
