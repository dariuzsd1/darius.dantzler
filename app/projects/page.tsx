import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";
import { readMdx } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Projects",
  description: "SpaceHub, NodeSpace, Team VERA, and more, real projects built to solve real problems.",
};

export default async function Projects() {
  const items = getProjects();
  const bodies = await Promise.all(items.map((item) => readMdx(`projects/${item.slug}.mdx`)));

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        tag="Projects"
        title="Projects"
        dek="Projects taken on without being asked, the clearest evidence of what happens when nobody's assigning the work."
      />
      <div className="space-y-8">
        {items.map((item, i) => (
          <ProjectCard key={item.slug} item={item}>
            <MDXRemote source={bodies[i]} />
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
