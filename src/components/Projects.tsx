import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="pt-28 pb-20">
      <h2 className="reveal font-serif text-4xl font-normal mb-12 tracking-tight" style={{ color: 'var(--text)' }}>
        Projects
      </h2>

      {PROJECTS.map((project) => (
        <div
          key={project.name}
          className="reveal py-7 transition-all duration-300 hover:translate-x-2"
          style={{ borderBottom: '1px solid var(--border)' }}
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'var(--border)'}
        >
          <div className="flex items-baseline gap-3.5 mb-2 flex-wrap">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:text-accent transition-colors duration-200"
                style={{ color: 'var(--text)' }}
              >
                {project.name}
              </a>
            ) : (
              <span className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                {project.name}
              </span>
            )}
            <span className="text-[11px] tracking-wide uppercase font-medium" style={{ color: 'var(--accent)' }}>
              {project.tag}
            </span>
          </div>

          <p className="text-[13px] mb-3 max-w-[600px]" style={{ color: 'var(--text-dim)' }}>
            {project.description}
          </p>

          {project.award && (
            <p className="text-[11px] mb-3 italic" style={{ color: 'var(--text-dim)' }}>
              {project.award.text}
              <a
                href={project.award.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent transition-colors duration-200"
                style={{ color: 'var(--accent)' }}
              >
                {project.award.linkText}
              </a>
              {project.award.suffix}
            </p>
          )}

          <div className="flex gap-2 flex-wrap">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-0.5 rounded-sm"
                style={{ color: 'var(--text-dim)', background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
