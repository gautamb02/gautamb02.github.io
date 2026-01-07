import Section from "../components/Section";
import Pill from "../components/Pill";
import { Experience, ProfileData } from "../types";

type ExperienceSectionProps = {
  profile: ProfileData;
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const getEmoji = (company: string) => {
    if (company.includes("Lightspeed")) return "💼";
    if (company.includes("Razorpay")) return "💳";
    if (company.includes("Fractal")) return "📊";
    return "🏢";
  };

  return (
    <article className="experience-card">
      <header>
        <div>
          <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>{getEmoji(experience.company)}</span>
            {experience.role}
          </h3>
          <p className="subtitle">
            {experience.company} · {experience.period}
          </p>
        </div>
      </header>
      <p>{experience.summary}</p>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="experience-card__stack">
        {experience.stack.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>
    </article>
  );
};

const ExperienceSection = ({ profile }: ExperienceSectionProps) => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      description="Lead pods, align stakeholders, ship measurable impact."
    >
      <div className="experience-grid">
        {profile.Experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;

