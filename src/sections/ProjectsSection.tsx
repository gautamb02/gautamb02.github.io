import ToggleSection from "../components/ToggleSection";
import Tag, { TagColor } from "../components/Tag";
import { ProfileData, Project } from "../types";

type ProjectsSectionProps = {
  profile: ProfileData;
};

const typeMeta: Record<Project["type"], { label: string; color: TagColor }> = {
  "ai-agent": { label: "AI Agent", color: "blue" },
  "full-stack": { label: "Full-Stack", color: "green" },
  research: { label: "Research", color: "purple" },
};

const ProjectRow = ({ project }: { project: Project }) => {
  const meta = typeMeta[project.type];
  return (
    <article className="block-item">
      <header>
        <h3>{project.name}</h3>
        <div className="block-item__links">
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
      </header>
      <p className="block-line">{project.description}</p>
      <p className="block-item__impact block-line">{project.impact}</p>
      <div className="tag-row">
        <Tag label={meta.label} color={meta.color} />
        {project.tech.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>
    </article>
  );
};

const ProjectsSection = ({ profile }: ProjectsSectionProps) => {
  return (
    <ToggleSection
      id="projects"
      icon="🚀"
      title="Projects"
      description="Personal and university projects — production experience lives in the section above."
    >
      <div className="block-list">
        {profile.projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </div>
    </ToggleSection>
  );
};

export default ProjectsSection;
