import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceEntry } from "@/components/ExperienceEntry";
import { getExperience, getHonors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "USEUCOM Congressional Affairs, SJA, and J9 internships, and a Chiefs of Mission Planner role.",
};

export default function Experience() {
  const entries = getExperience();
  const honors = getHonors();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        tag="Experience"
        title="Professional Experience"
        dek="Time served across three USEUCOM directorates, a Chiefs of Mission planning role, and the jobs before all of it."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {entries.map((entry) => (
          <ExperienceEntry key={entry.id} entry={entry} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink/50">
          Honors &amp; Recognition
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/80">
          {honors.map((honor) => (
            <li key={honor}>{honor}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
