import { useEffect, useRef } from 'react';
import { EXPERIENCE } from '../data';

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="pt-20 pb-28">
      <h2 className="reveal font-serif text-4xl font-normal mb-12 tracking-tight" style={{ color: 'var(--text)' }}>
        Experience
      </h2>

      {EXPERIENCE.map((job) => (
        <div
          key={`${job.company}-${job.role}`}
          className="reveal py-7 transition-all duration-300 hover:translate-x-2"
          style={{ borderBottom: '1px solid var(--border)' }}
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'var(--border)'}
        >
          <div className="flex items-baseline gap-3 mb-1 flex-wrap">
            <span className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
              {job.role}
            </span>
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {job.company}
            </span>
          </div>

          <p className="text-xs mb-2.5" style={{ color: 'var(--text-dim)' }}>{job.date}</p>

          <p className="text-[13px] max-w-[600px]" style={{ color: 'var(--text-dim)' }}>
            {job.description}
          </p>
        </div>
      ))}
    </section>
  );
}
