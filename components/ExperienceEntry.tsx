import type { ProfessionalRecordEntry as Entry } from "@/types/content";

export function ExperienceEntry({ entry }: { entry: Entry }) {
  return (
    <article className="border-b border-ink/15 py-8 first:pt-0 last:border-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-serif text-2xl font-semibold">{entry.role}</h2>
        <p className="font-mono text-xs uppercase tracking-wide text-ink/50">
          {entry.startDate} — {entry.endDate}
        </p>
      </div>
      <p className="mt-1 text-ink/70">
        {entry.org}
        {entry.division ? ` — ${entry.division}` : ""} · {entry.location}
      </p>
      <p className="mt-4 max-w-2xl">{entry.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80">
        {entry.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}
