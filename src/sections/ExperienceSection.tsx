import Section from "../components/Section";
import Pill from "../components/Pill";
import { Experience, ProfileData } from "../types";

type ExperienceSectionProps = {
  profile: ProfileData;
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <article className="experience-card">
      <header>
        <div>
          <p className="eyebrow">{experience.period}</p>
          <h3>{experience.role}</h3>
          <p className="subtitle">
            {experience.company} · {experience.location}
          </p>
        </div>
        <div className="experience-card__stack">
          {experience.stack.map((item) => (
            <Pill key={item} label={item} />
          ))}
        </div>
      </header>
      <p>{experience.summary}</p>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
};

const ExperienceSection = ({ profile }: ExperienceSectionProps) => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Lead pods, align stakeholders, ship measurable impact."
      description="Snapshots of product work across SaaS, fintech, and platform teams."
    >
      <div className="experience-grid">
        {profile.experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;

