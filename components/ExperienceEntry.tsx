import type { ProfessionalRecordEntry as Entry } from "@/types/content";

export function ExperienceEntry({ entry }: { entry: Entry }) {
  return (
    <article className="rounded-2xl border border-ink/15 p-6">
      <h2 className="font-serif text-xl font-semibold">{entry.role}</h2>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
        {entry.startDate} - {entry.endDate}
      </p>
      <p className="mt-2 text-ink/70">
        {entry.org}
        {entry.division ? ` · ${entry.division}` : ""} · {entry.location}
      </p>
      <p className="mt-4">{entry.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
        {entry.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}
