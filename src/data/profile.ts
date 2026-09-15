import { ProfileData } from "../types";

export const profile: ProfileData = {
  name: "Gautam Bhagat",
  role: "Software Development Engineer I @ NudgeBee",
  location: "Pune, India",
  headline:
    "I build AI agents that reason over dashboards, logs, and conversations — and the infrastructure that keeps them fast and reliable.",
  bio: "Software Development Engineer at NudgeBee, working on an AI-agent platform for cloud debugging and SRE/Ops automation. I focus on RAG retrieval latency, multimodal reasoning over screenshots and diagrams, context engineering for long-running conversations, and memory-extraction pipelines that carry insight across sessions.",
  availability: "Open to conversations about AI agents & systems engineering",
  contactEmail: "gautambhagat.business@gmail.com",
  resumeUrl: "/resume.pdf",
  orcid: {
    id: "0009-0008-2943-7579",
    url: "https://orcid.org/0009-0008-2943-7579",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/gautamb02",
      handle: "@gautamb02",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/igautambhagat",
      handle: "in/igautambhagat",
    },
  ],
  stats: [
    { label: "Companies & internships", value: "4", helper: "since 2022" },
    { label: "Public repositories", value: "42", helper: "github.com/gautamb02" },
    { label: "National competition finals", value: "2", helper: "SIH '23 & Tech Infusion" },
    { label: "Tech talk attendees led", value: "700+", helper: "as GFG chapter lead" },
  ],
  experiences: [
    {
      company: "NudgeBee",
      role: "Software Development Engineer I",
      period: "Nov 2025 — Present",
      location: "Pune, India",
      summary:
        "Building the AI-agent platform powering cloud debugging and SRE/Ops automation.",
      highlights: [
        "Architected the image-support system, enabling agents to ingest and reason over dashboards, screenshots, and diagrams.",
        "Designed context-engineering strategies for long-running conversations — selecting, compressing, and carrying context across multi-turn sessions.",
        "Built memory-extraction pipelines that distill durable facts from conversations to improve recall and continuity.",
      ],
      stack: ["Python", "RAG", "AI Agents", "MCP", "Context Engineering"],
    },
    {
      company: "Lemma Technologies",
      role: "Software & GenAI Engineer",
      period: "Dec 2024 — Nov 2025",
      location: "Pune, India",
      summary:
        "Shipped GenAI pipelines for ad creative generation and real-time campaign forecasting.",
      highlights: [
        "Built a GenAI pipeline generating DCO ad creatives for DOOH, mobile, web & social — using Go channels for parallelism to deliver production-ready ads in 30–50s.",
        "Revamped the campaign forecasting engine with LLM-driven insights, delivering real-time predictions under 4 seconds.",
        "Developed an end-user MCP client for querying UI dashboards and triggering API actions in natural language.",
      ],
      stack: ["Go", "LLMs", "MCP", "GenAI"],
    },
    {
      company: "Muks Robotics",
      role: "AI & ML Engineer",
      period: "Apr 2024 — Jul 2024",
      location: "Pune, India",
      summary: "Deployed computer-vision systems for factory access control and site safety.",
      highlights: [
        "Engineered a real-time face recognition system for factory access control across 1,500+ employees.",
        "Deployed a PPE violation detection system with OpenCV, cutting weekly violations from ~100 to 15–20 within four weeks.",
      ],
      stack: ["Python", "OpenCV", "Computer Vision"],
    },
    {
      company: "DIBC",
      role: "Full Stack Developer",
      period: "Jan 2022 — Jul 2022",
      location: "Mumbai, India",
      summary: "Built backends for a cab-based ad platform deployed across 150+ cabs.",
      highlights: [
        "Built scalable Django backends for Greenvue Ads, handling 10K+ daily API calls.",
        "Cut server response time 40% via async views and optimized endpoints.",
      ],
      stack: ["Django", "Python", "PostgreSQL"],
    },
  ],
  projects: [
    {
      name: "agentic-ai",
      description: "Agentic AI runtime — tool-calling LLM agents with structured execution loops.",
      impact: "Core reasoning loop reused across personal agent experiments.",
      tech: ["Go"],
      type: "ai-agent",
      links: { repo: "https://github.com/gautamb02/agentic-ai" },
    },
    {
      name: "dag_workflow",
      description:
        "Async DAG workflow engine with dependency resolution, auto-resume, and dynamic task generation.",
      impact: "Handles long-running multi-step agent workflows without losing progress on failure.",
      tech: ["Python", "asyncio", "MongoDB"],
      type: "ai-agent",
      links: { repo: "https://github.com/gautamb02/dag_workflow" },
    },
    {
      name: "mcpclient-api",
      description:
        "MCP protocol chat backend with session management and Redis-backed conversation state.",
      impact: "Backbone for natural-language querying over UI dashboards and APIs.",
      tech: ["FastAPI", "Redis", "MCP"],
      type: "ai-agent",
      links: { repo: "https://github.com/gautamb02/mcpclient-api" },
    },
    {
      name: "react-agent-huggingface",
      description:
        "Custom ReAct agent for HuggingFace with dynamic tool-calling and structured reasoning logs.",
      impact: "Reference implementation for debugging agent reasoning step by step.",
      tech: ["Python", "Pydantic"],
      type: "ai-agent",
      links: { repo: "https://github.com/gautamb02/react-agent-huggingface" },
    },
    {
      name: "FOGAN-X",
      description:
        "Custom GAN-based dehazing algorithm integrated with a real-time drone feed over RTSP.",
      impact: "Improved visibility 40% and halved processing time for disaster-response operations.",
      tech: ["PyTorch", "CNNs", "RTSP"],
      type: "research",
      links: { repo: "https://github.com/gautamb02/foganx-drone" },
    },
    {
      name: "ScoreCraft",
      description:
        "AI exam platform with RAG-based question generation, real-time facial recognition, and tab-switch detection.",
      impact: "93% grading accuracy with automated integrity monitoring.",
      tech: ["FastAPI", "React", "LLMs", "RAG"],
      type: "research",
      links: {},
    },
  ],
  publications: [
    {
      title: "Generative Desmoking Algorithm for Enhancing Images in Low-Visibility Environments",
      venue: "Lecture Notes in Networks and Systems",
      year: "2026",
      url: "https://doi.org/10.1007/978-3-032-13803-3_17",
    },
    {
      title: "A Survey of Proximity and Range Sensing Technologies for Reliable Distance Estimation",
      venue: "Smart Innovation, Systems and Technologies",
      year: "2024",
      url: "https://doi.org/10.1007/978-981-97-7094-6_2",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Python", "Go", "TypeScript", "JavaScript", "Java", "C++"],
    },
    {
      title: "Frameworks",
      items: ["React", "Next.js", "FastAPI", "Django", "Node.js", "Express"],
    },
    {
      title: "AI / Agents",
      items: ["RAG", "AI Agents (ReAct/ReWOO)", "MCP", "Context Engineering", "Transformers/BERT", "PyTorch"],
    },
    {
      title: "Data & Cloud",
      items: ["PostgreSQL", "MongoDB", "Qdrant", "Redis", "AWS", "GCP", "Docker"],
    },
  ],
  education: {
    institution: "Pimpri Chinchwad College of Engineering",
    degree: "B.Tech, Computer Science and Engineering (AI & ML)",
    period: "May 2025",
    location: "Pune, India",
  },
  achievements: [
    "National Finalist, Smart India Hackathon 2023 — top of 44,000+ participants.",
    "Finalist, La Trobe University's global Tech Infusion Smart City Challenge — top of 8,000+ participants.",
    "Led PCCOE's GeeksforGeeks Student Chapter (50+ execs); ran a 700+ attendee tech talk and a 150+ participant hackathon.",
  ],
  contact: [
    {
      label: "Email",
      value: "gautambhagat.business@gmail.com",
      href: "mailto:gautambhagat.business@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "in/igautambhagat",
      href: "https://linkedin.com/in/igautambhagat",
    },
    {
      label: "GitHub",
      value: "@gautamb02",
      href: "https://github.com/gautamb02",
    },
    {
      label: "ORCID",
      value: "0009-0008-2943-7579",
      href: "https://orcid.org/0009-0008-2943-7579",
    },
  ],
};
