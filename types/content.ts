export interface ProfessionalRecordEntry {
  id: string;
  org: string;
  division?: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  location: string;
  startDate?: string;
  endDate: string;
  status: "in-progress" | "completed";
  highlights: string[];
}

export interface CaseworkLinks {
  site?: string;
  video?: string;
  report?: string;
}

export interface CaseworkItem {
  slug: string;
  title: string;
  tag: "Self-Directed" | "ISU Team Sprint";
  role: string;
  dates: string;
  summary: string;
  stack: string[];
  links: CaseworkLinks;
  status: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SiteMeta {
  name: string;
  tagline: string;
  lastUpdated: string;
  email: string;
  linkedin?: string;
  cvPath: string;
  languages: Language[];
}
