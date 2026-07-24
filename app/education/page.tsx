import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { EducationEntry } from "@/components/EducationEntry";
import { getEducation } from "@/lib/content";

export const metadata: Metadata = {
  title: "Education",
  description: "ISU Space Studies (in progress) and a BS in Political Science & Business Law.",
};

export default function Education() {
  const entries = getEducation();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PageHeader
        tag="Education"
        title="Education & Training"
        dek="Space policy on top of a foundation in political science and business law."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {entries.map((entry) => (
          <EducationEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
