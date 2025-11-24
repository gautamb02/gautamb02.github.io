import { ProfileData } from "../types";

export const profile: ProfileData = {
  name: "Gautam Bhagat",
  role: "Product-Focused Software Engineer",
  location: "Pune, India",
  headline:
    "I design cloud-native frontends that convert business goals into delightful experiences.",
  bio: "Former startup engineer turned product lead with a focus on resilient design systems, shipping experiments quickly, and mentoring teams to own their outcomes.",
  availability: "Open for senior frontend + product engineering roles",
  contactEmail: "gautambhagat.business@gmail.com.com",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/gautamb02",
      handle: "@gautamb02",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/gautambhagat",
      handle: "in/gautambhagat",
    },
    {
      platform: "X",
      url: "https://x.com/thegautambhagat",
      handle: "@thegautambhagat",
    },
  ],
  stats: [
    { label: "Years shipping products", value: "7+", helper: "B2B & SaaS" },
    { label: "Features in production", value: "140+", helper: "web & mobile" },
    { label: "Design systems led", value: "3", helper: "multi-brand" },
    { label: "Avg. uplift", value: "22%", helper: "conversion metrics" },
  ],
  experiences: [
    {
      company: "Lightspeed Commerce",
      role: "Senior Frontend Engineer · Product Pod Lead",
      period: "2022 — Present",
      location: "Remote",
      summary:
        "Led a multi-disciplinary pod rebuilding the back-office analytics suite for hospitality merchants.",
      highlights: [
        "Scoped and launched a modular dashboard builder that cut time-to-insight from 2 weeks to 3 days.",
        "Established performance budgets and introduced Real User Monitoring to the whole org.",
        "Mentored 5 engineers and designers on API contracts, accessibility, and storytelling with data.",
      ],
      stack: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Vite",
        "GraphQL",
        "Storybook",
      ],
    },
    {
      company: "Razorpay",
      role: "Frontend Engineer II",
      period: "2019 — 2022",
      location: "Bengaluru",
      summary:
        "Owned the checkout experience powering >$4B in annual payment volume.",
      highlights: [
        "Implemented experiment-driven onboarding that improved activation by 18%.",
        "Rebuilt the merchant dashboard navigation with feature flags for gradual rollout.",
        "Collaborated with security to add device fingerprinting without affecting Core Web Vitals.",
      ],
      stack: ["React", "Next.js", "Node", "Redux", "SASS"],
    },
    {
      company: "Fractal Analytics",
      role: "Software Engineer",
      period: "2017 — 2019",
      location: "Mumbai",
      summary:
        "Shipped internal tooling for data scientists and the customer success org.",
      highlights: [
        "Prototyped a low-code rules editor adopted by 8 enterprise accounts.",
        "Refined release pipelines, shaving 40% from regression testing cycles.",
      ],
      stack: ["Angular", "RxJS", "Express", "Azure"],
    },
  ],
  projects: [
    {
      name: "PulseOps",
      description:
        "An internal ops console template used by two YC startups to unify alerts, tooling, and runbooks.",
      impact: "Reduced context-switching time for on-call engineers by 35%.",
      tech: ["React", "Zustand", "Tailwind", "Supabase"],
      type: "client",
      links: { live: "https://pulseops.app", repo: "https://github.com/gautamb02/pulseops" },
    },
    {
      name: "Invoice Sketch",
      description:
        "A PDF-first invoicing workflow for freelancers with repeatable templates and quick math helpers.",
      impact: "Reached $2k ARR with zero marketing through design-community word of mouth.",
      tech: ["Next.js", "Remix Icons", "Cloudflare Pages"],
      type: "product",
      links: { live: "https://invoicesketch.com" },
    },
    {
      name: "Motion CLI",
      description:
        "Experiment to convert Figma motion specs into easing tokens consumable by web apps.",
      impact: "Cut the time designers spent handing off motion from 3 days to 6 hours.",
      tech: ["Node", "TypeScript", "Playwright"],
      type: "experiment",
      links: { repo: "https://github.com/gautamb02/motion-cli" },
    },
  ],
  skills: [
    {
      title: "Core Engineering",
      items: [
        "TypeScript",
        "React 19",
        "Accessibility (WCAG 2.2)",
        "State Machines",
        "Node",
      ],
    },
    {
      title: "Product & Process",
      items: [
        "Product discovery",
        "Experiment design",
        "Design systems",
        "Data storytelling",
        "Stakeholder alignment",
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        "GraphQL",
        "Playwright",
        "Storybook",
        "Vite",
        "Azure / AWS",
      ],
    },
  ],
  contact: [
    {
      label: "Email",
      value: "gautambhagat.business@gmail.com.com",
      href: "mailto:gautambhagat.business@gmail.com.com",
    },
    {
      label: "Calendly",
      value: "Book a coffee chat",
      href: "https://cal.com/gautam-bhagat/coffee",
    },
    {
      label: "Newsletter",
      value: "Build Notes (bi-weekly)",
      href: "https://buildnotes.substack.com",
    },
  ],
};

