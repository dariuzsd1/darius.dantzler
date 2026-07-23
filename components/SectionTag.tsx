export function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-block border border-ink/20 bg-accent px-3 py-1 font-mono text-xs uppercase tracking-wider text-ink">
      {label}
    </span>
  );
}
