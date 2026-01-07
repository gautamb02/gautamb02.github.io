import Section from "../components/Section";
import Pill from "../components/Pill";
import { ProfileData, Project } from "../types";

type ProjectsSectionProps = {
  profile: ProfileData;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const getEmoji = (type: string) => {
    if (type === "product") return "🚀";
    if (type === "client") return "🤝";
    if (type === "experiment") return "🧪";
    return "📁";
  };

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0 }}>
          <span>{getEmoji(project.type)}</span>
          {project.name}
        </h3>
        <div className="project-card__links">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="pill">
              Live
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer" className="pill">
              Repo
            </a>
          )}
        </div>
      </div>
      <p>{project.description}</p>
      <p className="project-card__impact" style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
        <strong>Impact:</strong> {project.impact}
      </p>
      <div className="project-card__tech">
        {project.tech.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>
    </article>
  );
};

const ProjectsSection = ({ profile }: ProjectsSectionProps) => {
  return (
    <Section
      id="projects"
      title="Side Projects"
      description="A blend of client engagements, internal tooling, and playful prototypes."
    >
      <div className="project-grid">
        {profile.Projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;

