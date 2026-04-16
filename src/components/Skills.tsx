import { useEffect } from 'react';
import { SKILLS } from '../data';
import Footer from './Footer';

export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = Object.entries(SKILLS);

  return (
    <main className="max-w-[860px] mx-auto px-6 md:px-8">
      <section className="pt-32 pb-20 min-h-screen">
        <h1
          className="font-serif text-5xl md:text-6xl font-normal mb-4 tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Skills
        </h1>
        <p className="text-sm mb-16" style={{ color: 'var(--text-dim)' }}>
          Languages, frameworks, and tools I work with
        </p>

        <div className="grid gap-14">
          {groups.map(([category, items]) => (
            <div key={category}>
              <h2
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: 'var(--accent)' }}
              >
                {category}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] px-3.5 py-1.5 rounded-sm transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      color: 'var(--text)',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
