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
  type: "ai-agent" | "full-stack" | "research";
  links: {
    live?: string;
    repo?: string;
  };
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  url: string;
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

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
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
  orcid: {
    id: string;
    url: string;
  };
  socials: SocialLink[];
  stats: Stat[];
  experiences: Experience[];
  projects: Project[];
  publications: Publication[];
  skills: SkillCategory[];
  education: Education;
  achievements: string[];
  contact: ContactChannel[];
};
