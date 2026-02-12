import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';
import SectionLabel from './SectionLabel';

export default function Projects() {
  return (
    <section className="py-16 md:py-24 border-t border-[#1a1a1a] animate-fade-in-delay-4">
      <SectionLabel label="PROJECTS" />

      <div className="space-y-12">
        {PROJECTS.map((project, i) => (
          <div key={i}>
            <div className="flex items-baseline gap-3 flex-wrap">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-white hover:text-[#39FF14] transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  {project.title}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-lg font-bold text-white">{project.title}</span>
              )}
              <span className="text-xs uppercase tracking-[0.2em] text-[#666]">
                {project.subtitle}
              </span>
            </div>

            <p className="mt-3 text-sm text-[#888] leading-relaxed">{project.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-[#39FF14] border border-[#39FF14]/20 px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
