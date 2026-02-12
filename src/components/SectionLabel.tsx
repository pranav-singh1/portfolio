interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="mb-12">
      <span className="text-xs uppercase tracking-[0.2em] text-[#666]">
        {label}
      </span>
    </div>
  );
}
