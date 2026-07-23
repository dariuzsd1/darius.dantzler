export function InfoCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="border border-ink/15 p-6">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/50">{label}</p>
      <p className="mt-2 font-serif text-2xl font-semibold">{value}</p>
      {detail && <p className="mt-1 text-ink/70">{detail}</p>}
    </div>
  );
}
