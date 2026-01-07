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
  Name: string;
  Role: string;
  Location: string;
  Headline: string;
  Bio: string;
  Availability: string;
  ContactEmail: string;
  ResumeURL: string;
  Socials: SocialLink[];
  Stats: Stat[];
  Experiences: Experience[];
  Projects: Project[];
  Skills: SkillCategory[];
  Contact: ContactChannel[];
};

