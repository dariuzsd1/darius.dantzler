import type { ProfessionalRecordEntry, EducationEntry, CaseworkItem } from "@/types/content";
import experienceData from "@/content/experience.json";
import educationData from "@/content/education.json";
import projectsIndex from "@/content/projects/index.json";
import honorsData from "@/content/honors.json";

export { siteMeta } from "@/content/site";

export function getExperience(): ProfessionalRecordEntry[] {
  return experienceData satisfies ProfessionalRecordEntry[];
}

export function getEducation(): EducationEntry[] {
  // JSON imports widen literal unions (e.g. status) to `string`, so `as`
  // is used here instead of `satisfies` — the interface still catches
  // missing/misnamed fields, just not the literal-union narrowing.
  return educationData as EducationEntry[];
}

export function getProjects(): CaseworkItem[] {
  return projectsIndex as CaseworkItem[];
}

export function getProjectBySlug(slug: string): CaseworkItem | undefined {
  return getProjects().find((item) => item.slug === slug);
}

export function getHonors(): string[] {
  return honorsData satisfies string[];
}
