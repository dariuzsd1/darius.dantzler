import { SectionTag } from "@/components/SectionTag";

export function PageHeader({
  tag,
  title,
  dek,
}: {
  tag: string;
  title: string;
  dek?: string;
}) {
  return (
    <header className="mb-10">
      <SectionTag label={tag} />
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {dek && <p className="mt-3 max-w-2xl text-lg text-ink/70">{dek}</p>}
      <div className="mt-6 h-px w-full bg-ink/15" />
    </header>
  );
}
