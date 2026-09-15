import ToggleSection from "../components/ToggleSection";
import Tag from "../components/Tag";
import { Experience, ProfileData } from "../types";

type ExperienceSectionProps = {
  profile: ProfileData;
};

const ExperienceRow = ({ experience }: { experience: Experience }) => {
  return (
    <article className="block-item">
      <header>
        <div>
          <h3>{experience.role}</h3>
          <p className="subtitle">
            {experience.company} · {experience.location}
          </p>
        </div>
        <p className="block-item__period">{experience.period}</p>
      </header>
      <p className="block-line">{experience.summary}</p>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="block-line">
            {highlight}
          </li>
        ))}
      </ul>
      <div className="tag-row">
        {experience.stack.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>
    </article>
  );
};

const ExperienceSection = ({ profile }: ExperienceSectionProps) => {
  return (
    <ToggleSection
      id="experience"
      icon="💼"
      title="Experience"
      description="Reverse chronological, from NudgeBee back to my first internship."
    >
      <div className="block-list">
        {profile.experiences.map((experience) => (
          <ExperienceRow key={experience.company} experience={experience} />
        ))}
      </div>
    </ToggleSection>
  );
};

export default ExperienceSection;
