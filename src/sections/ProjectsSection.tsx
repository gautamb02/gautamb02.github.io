import Section from "../components/Section";
import Pill from "../components/Pill";
import { ProfileData, Project } from "../types";

type ProjectsSectionProps = {
  profile: ProfileData;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <Pill label={project.type} />
        <div className="project-card__links">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          )}
        </div>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p className="project-card__impact">{project.impact}</p>
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
      eyebrow="Selected work"
      title="Side projects that experiment quickly."
      description="A blend of client engagements, internal tooling, and playful prototypes."
    >
      <div className="project-grid">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;

