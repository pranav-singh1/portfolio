import { SKILLS } from '../data';
import SectionLabel from './SectionLabel';

export default function Skills() {
  return (
    <section className="py-16 md:py-24 border-t border-[#1a1a1a] animate-fade-in-delay-5">
      <SectionLabel label="SKILLS" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <p className="text-sm font-bold text-white">{group.category}</p>
            <p className="mt-1 text-sm text-[#888]">{group.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
