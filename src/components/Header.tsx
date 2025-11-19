import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const navItems = ['Home', 'Work', 'About', 'Contact'];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-black' : 'bg-transparent'
      }`}
    >
      <h1 className="text-3xl font-display font-bold tracking-tighter uppercase italic hover:animate-glitch cursor-default">
        Pranav Singh
      </h1>
      <nav className="mt-4 md:mt-0">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => handleScrollTo(item)}
                className="font-display font-medium uppercase text-sm tracking-widest hover:line-through decoration-2 decoration-black transition-all"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
