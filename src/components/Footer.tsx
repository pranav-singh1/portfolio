import { SOCIALS } from '../data';

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-[#1a1a1a]">
      <div className="flex items-center gap-3 text-sm">
        {SOCIALS.map((social, i) => (
          <span key={social.name} className="flex items-center gap-3">
            <a
              href={social.url}
              target={social.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#39FF14] transition-colors duration-200 lowercase"
            >
              {social.name.toLowerCase()}
            </a>
            {i < SOCIALS.length - 1 && <span className="text-[#333]">·</span>}
          </span>
        ))}
      </div>

      <p className="mt-6 text-xs text-[#333]">&copy; 2026</p>
    </footer>
  );
}
