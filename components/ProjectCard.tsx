import type { CaseworkItem } from "@/types/content";

export function ProjectCard({ item, children }: { item: CaseworkItem; children?: React.ReactNode }) {
  return (
    <article className="border border-ink/15 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="border border-ink/20 px-2 py-1 font-mono text-xs uppercase tracking-wide text-ink/60">
          {item.tag}
        </span>
        <span className="font-mono text-xs uppercase tracking-wide text-ink/50">{item.dates}</span>
      </div>
      <h2 className="mt-4 font-serif text-3xl font-semibold">{item.title}</h2>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
        {item.role} · {item.status}
      </p>
      <p className="mt-4 max-w-2xl">{item.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <li key={s} className="border border-ink/15 px-2 py-1 font-mono text-xs text-ink/70">
            {s}
          </li>
        ))}
      </ul>
      {children && <div className="prose mt-6 max-w-2xl">{children}</div>}
    </article>
  );
}
