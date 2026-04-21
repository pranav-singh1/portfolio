import { BIO, CURRENTLY } from '../data';
import CarScene from './CarScene';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-20 max-w-none"
    >
      <div className="text-center max-w-[560px] mb-10">
        <h1 className="hero-fade hero-fade-name font-serif text-5xl md:text-7xl font-normal tracking-tight leading-none" style={{ color: 'var(--text)' }}>
          {BIO.fullName}
        </h1>

        <p className="hero-fade hero-fade-bio text-sm mt-4 leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          {BIO.subtitle}
        </p>

        <p className="hero-fade hero-fade-bio text-xs mt-1" style={{ color: 'var(--text-dimmer)' }}>
          {BIO.location}
        </p>

        <p className="hero-fade hero-fade-desc text-sm mt-8 leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-dim)' }}>
          {BIO.description}
        </p>

        <div className="hero-fade hero-fade-currently mt-6">
          <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-sm tracking-widest uppercase mb-1.5" style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
            {CURRENTLY.label}
          </span>
          <p className="text-[13px]" style={{ color: 'var(--text-dim)' }}>{CURRENTLY.text}</p>
        </div>

        <p className="hero-fade hero-fade-currently text-[13px] mt-5 leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Outside of work and academics, I enjoy basketball, music, weightlifting, cars, and more — added my dream car, the SVJ, right below (click on it).
        </p>
      </div>

      <CarScene />
    </section>
  );
}
