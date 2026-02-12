import { EXPERIENCE } from '../data';
import SectionLabel from './SectionLabel';

export default function Experience() {
  return (
    <section className="py-16 md:py-24 border-t border-[#1a1a1a] animate-fade-in-delay-3">
      <SectionLabel label="EXPERIENCE" />

      <div className="space-y-12">
        {EXPERIENCE.map((job, i) => (
          <div key={i}>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <p className="text-white text-sm">
                {job.title} <span className="text-[#666]">— {job.company}</span>
              </p>
              <p className="text-xs text-[#666] md:shrink-0">{job.date}</p>
            </div>

            <ul className="mt-4 space-y-2">
              {job.details.map((detail, j) => (
                <li key={j} className="text-sm text-[#888] leading-relaxed pl-4">
                  <span className="text-[#39FF14] -ml-4 mr-2">›</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
