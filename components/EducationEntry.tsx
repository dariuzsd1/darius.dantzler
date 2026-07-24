import type { EducationEntry as Entry } from "@/types/content";
import { InstitutionBadge } from "@/components/InstitutionBadge";

export function EducationEntry({ entry }: { entry: Entry }) {
  return (
    <article className="rounded-2xl border border-ink/15 p-6">
      <div className="flex items-start gap-4">
        <InstitutionBadge
          logoUrl={entry.logoUrl}
          flagCountry={entry.flagCountry}
          alt={entry.institution}
          wide={entry.wideLogo}
        />
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-xl font-semibold">{entry.credential}</h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
            {entry.startDate ? `${entry.startDate} - ` : ""}
            {entry.endDate}
          </p>
          <p className="mt-1 text-ink/70">
            {entry.institution} · {entry.location}
          </p>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
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
      {entry.paper && (
        <p className="mt-4 text-sm">
          <a
            href={entry.paper.url}
            download
            className="underline decoration-accent decoration-2"
          >
            Read the paper: {entry.paper.title} (PDF)
          </a>
        </p>
      )}
    </article>
  );
}
