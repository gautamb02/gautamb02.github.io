import Section from "../components/Section";
import { ProfileData, SkillCategory } from "../types";

type SkillsSectionProps = {
  profile: ProfileData;
};

const SkillsCard = ({ category }: { category: SkillCategory }) => {
  return (
    <article className="skills-card">
      <h3>{category.title}</h3>
      <ul>
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

const SkillsSection = ({ profile }: SkillsSectionProps) => {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="A balanced stack for product velocity."
      description="From systems thinking to pixels and perf budgets."
    >
      <div className="skills-grid">
        {profile.skills.map((category) => (
          <SkillsCard key={category.title} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;

