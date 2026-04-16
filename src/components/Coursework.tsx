import { useEffect } from 'react';
import { COURSEWORK } from '../data';
import Footer from './Footer';

export default function Coursework() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const csDept = COURSEWORK.filter(c => c.code.startsWith('CS'));
  const mathStat = COURSEWORK.filter(c => !c.code.startsWith('CS'));

  return (
    <main className="max-w-[860px] mx-auto px-6 md:px-8">
      <section className="pt-32 pb-20 min-h-screen">
        <h1
          className="font-serif text-5xl md:text-6xl font-normal mb-4 tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Coursework
        </h1>
        <p className="text-sm mb-16" style={{ color: 'var(--text-dim)' }}>
          Relevant courses taken at UW-Madison
        </p>

        <div className="mb-14">
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            Computer Science
          </h2>
          {csDept.map((course) => (
            <div
              key={course.code}
              className="flex items-baseline gap-4 py-4 transition-all duration-300 hover:translate-x-2"
              style={{ borderBottom: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'var(--border)'}
            >
              <span
                className="text-[13px] font-semibold shrink-0 w-20"
                style={{ color: 'var(--text)' }}
              >
                {course.code}
              </span>
              <span className="text-[13px]" style={{ color: 'var(--text-dim)' }}>
                {course.name}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            Math & Statistics
          </h2>
          {mathStat.map((course) => (
            <div
              key={course.code}
              className="flex items-baseline gap-4 py-4 transition-all duration-300 hover:translate-x-2"
              style={{ borderBottom: '1px solid var(--border)' }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'var(--border)'}
            >
              <span
                className="text-[13px] font-semibold shrink-0 w-24"
                style={{ color: 'var(--text)' }}
              >
                {course.code}
              </span>
              <span className="text-[13px]" style={{ color: 'var(--text-dim)' }}>
                {course.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
