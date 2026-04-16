import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const dimStyle = { color: 'var(--text-dim)' };
  const hoverIn = (e: React.MouseEvent<HTMLElement>) => e.currentTarget.style.color = 'var(--text)';
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => e.currentTarget.style.color = 'var(--text-dim)';

  const goToSection = (id: string) => (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 md:px-12 py-5 backdrop-blur-xl border-b" style={{ background: 'var(--nav-bg)', borderColor: 'var(--border)' }}>
      <Link
        to="/"
        className="font-serif text-[22px] no-underline tracking-tight"
        style={{ color: 'var(--text)' }}
      >
        Pranav Singh
      </Link>
      <div className="flex items-center gap-8">
        <ul className="flex gap-8 list-none">
          <li>
            <a
              href="#projects"
              onClick={goToSection('projects')}
              className="text-[13px] no-underline tracking-wide transition-colors duration-300"
              style={dimStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={goToSection('experience')}
              className="text-[13px] no-underline tracking-wide transition-colors duration-300"
              style={dimStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Experience
            </a>
          </li>
          <li>
            <Link
              to="/coursework"
              className="text-[13px] no-underline tracking-wide transition-colors duration-300"
              style={dimStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Coursework
            </Link>
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
