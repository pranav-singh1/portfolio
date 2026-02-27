import { SOCIALS } from '../data';

export default function Footer() {
  return (
    <footer className="py-20 text-center">
      <div className="flex justify-center gap-8 flex-wrap mb-10">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="footer-link text-[13px] no-underline"
            style={{ color: 'var(--text-dim)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
          >
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
