import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "SpaceHub, NodeSpace, Team VERA, and more, real projects built to solve real problems.",
};

export default function Projects() {
  const items = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        tag="Projects"
        title="Projects"
        dek="Projects taken on without being asked, the clearest evidence of what happens when nobody's assigning the work. Click through for the full write-up."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <ProjectSummaryCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
