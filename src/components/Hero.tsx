import { BIO, SEEKING, SOCIALS } from '../data';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-[-0.05em] text-white animate-fade-in">
        {BIO.name}
      </h1>

      <p className="mt-4 text-sm text-[#888] animate-fade-in-delay-1">
        Computer Science & Data Science student— {BIO.university} '27
      </p>

      <p className="mt-1 text-xs text-[#666] animate-fade-in-delay-1">
        Bay Area & Madison · {BIO.email}
      </p>

      <p className="mt-8 text-sm text-[#888] leading-relaxed max-w-xl animate-fade-in-delay-2">
        {BIO.description}
      </p>

      <p className="mt-6 text-sm text-[#39FF14] animate-fade-in-delay-3">
        {SEEKING}
      </p>

      <div className="mt-8 flex items-center gap-5 animate-fade-in-delay-4">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#39FF14] transition-colors duration-200"
            aria-label={social.name}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
