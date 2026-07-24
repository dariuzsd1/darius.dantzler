import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { readMdx } from "@/lib/mdx";

export async function generateStaticParams() {
  return getProjects().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getProjectBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProjectBySlug(slug);
  if (!item) notFound();

  const source = await readMdx(`projects/${slug}.mdx`);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/projects"
        className="font-mono text-xs uppercase tracking-wide text-ink/60 underline decoration-accent decoration-2"
      >
        Back to Projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <span className="border border-ink/20 px-2 py-1 font-mono text-xs uppercase tracking-wide text-ink/60">
          {item.tag}
        </span>
        <span className="font-mono text-xs uppercase tracking-wide text-ink/50">{item.dates}</span>
      </div>
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        {item.title}
      </h1>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
        {item.role} · {item.status}
      </p>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">{item.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <li key={s} className="border border-ink/15 px-2 py-1 font-mono text-xs text-ink/70">
            {s}
          </li>
        ))}
      </ul>

      {(item.links.site || item.links.video || item.links.report) && (
        <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wide">
          {item.links.site && (
            <a
              href={item.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent decoration-2"
            >
              View Live Site
            </a>
          )}
          {item.links.video && (
            <a
              href={item.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent decoration-2"
            >
              Watch Video
            </a>
          )}
          {item.links.report && (
            <a
              href={item.links.report}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent decoration-2"
            >
              Read Report
            </a>
          )}
        </div>
      )}

      <div className="mt-8 h-px w-full bg-ink/15" />

      <div className="prose prose-lg mt-8 max-w-2xl">
        <MDXRemote source={source} />
      </div>
    </div>
  );
}
