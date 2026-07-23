import type { EducationEntry as Entry } from "@/types/content";

export function EducationEntry({ entry }: { entry: Entry }) {
  return (
    <article className="border-b border-ink/15 py-8 first:pt-0 last:border-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-serif text-2xl font-semibold">{entry.credential}</h2>
        <p className="font-mono text-xs uppercase tracking-wide text-ink/50">
          {entry.startDate ? `${entry.startDate} — ` : ""}
          {entry.endDate}
        </p>
      </div>
      <p className="mt-1 text-ink/70">
        {entry.institution} · {entry.location}
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80">
        {entry.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {entry.status === "in-progress" && (
        <p className="mt-4">
          <span className="border border-ink/20 bg-accent px-2 py-1 font-mono text-xs uppercase tracking-wide text-ink">
            In Progress
          </span>
        </p>
      )}
    </article>
  );
}
