import { useState, useEffect } from 'react';

export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 md:px-12 py-5 backdrop-blur-xl border-b" style={{ background: 'var(--nav-bg)', borderColor: 'var(--border)' }}>
      <a
        href="#hero"
        className="font-serif text-[22px] no-underline tracking-tight"
        style={{ color: 'var(--text)' }}
      >
        Pranav Singh
      </a>
      <div className="flex items-center gap-8">
        <ul className="flex gap-8 list-none">
          <li>
            <a
              href="#projects"
              className="text-[13px] no-underline tracking-wide transition-colors duration-300"
              style={{ color: 'var(--text-dim)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-[13px] no-underline tracking-wide transition-colors duration-300"
              style={{ color: 'var(--text-dim)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              Experience
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDark(!dark)}
          className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-300 text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
          aria-label="Toggle dark mode"
        >
          {dark ? '◑' : '◐'}
        </button>
      </div>
    </nav>
  );
}
