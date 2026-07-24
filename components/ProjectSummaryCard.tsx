import Link from "next/link";
import type { CaseworkItem } from "@/types/content";

export function ProjectSummaryCard({ item }: { item: CaseworkItem }) {
  return (
    <Link
      href={`/projects/${item.slug}`}
      className="group block rounded-2xl border border-ink/15 p-6 transition-colors hover:border-ink/40"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="border border-ink/20 px-2 py-1 font-mono text-xs uppercase tracking-wide text-ink/60">
          {item.tag}
        </span>
        <span className="font-mono text-xs uppercase tracking-wide text-ink/50">{item.dates}</span>
      </div>
      <h2 className="mt-4 font-serif text-2xl font-semibold group-hover:underline group-hover:decoration-accent group-hover:decoration-2">
        {item.title}
      </h2>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
        {item.role} · {item.status}
      </p>
      <p className="mt-4 text-sm">{item.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <li key={s} className="border border-ink/15 px-2 py-1 font-mono text-xs text-ink/70">
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ink underline decoration-accent decoration-2">
        Read More
      </p>
    </Link>
  );
}
