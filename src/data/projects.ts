export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  icon: "code" | "box" | "flask" | "terminal" | "apple" | "chart";
  featured: boolean;
  links?: ProjectLink[];
  overview?: string;
  challenge?: string;
  approach?: string;
  features?: string[];
  workflow?: string[];
  results?: string[];
  technologies: string[];
  interviewTalkingPoints?: string[];
};

export const projects: Project[] = [];
