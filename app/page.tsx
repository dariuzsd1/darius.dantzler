import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { readMdx } from "@/lib/mdx";
import { siteMeta } from "@/lib/content";

export default async function Home() {
  const source = await readMdx("about.mdx");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
        {siteMeta.name}
      </h1>
      <p className="mt-3 max-w-xl font-mono text-sm uppercase tracking-wide text-ink/60">
        {siteMeta.tagline}
      </p>
      <div className="mt-8 h-px w-full bg-ink/15" />

      <div className="prose prose-lg mt-8 max-w-2xl">
        <MDXRemote source={source} />
      </div>

      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/50">Languages</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {siteMeta.languages.map((lang) => (
            <li
              key={lang.name}
              className="border border-ink/15 px-3 py-1 font-mono text-xs text-ink/70"
            >
              {lang.name} — {lang.level}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/experience"
          className="border border-ink bg-ink px-5 py-2 font-mono text-xs uppercase tracking-wide text-bone transition-opacity hover:opacity-90"
        >
          View my experience
        </Link>
        <Link
          href="/contact"
          className="border border-ink px-5 py-2 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-ink hover:text-bone"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
