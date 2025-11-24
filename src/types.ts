export type SocialLink = {
  platform: string;
  url: string;
  handle?: string;
};

export type Stat = {
  label: string;
  value: string;
  helper?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  description: string;
  impact: string;
  tech: string[];
  type: "client" | "product" | "experiment";
  links: {
    live?: string;
    repo?: string;
  };
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type ProfileData = {
  name: string;
  role: string;
  location: string;
  headline: string;
  bio: string;
  availability: string;
  contactEmail: string;
  resumeUrl: string;
  socials: SocialLink[];
  stats: Stat[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  contact: ContactChannel[];
};

