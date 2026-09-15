import ToggleSection from "../components/ToggleSection";
import Tag, { TagColor } from "../components/Tag";
import { ProfileData, SkillCategory } from "../types";

type SkillsSectionProps = {
  profile: ProfileData;
};

const categoryColor: Record<string, TagColor> = {
  Languages: "blue",
  Frameworks: "purple",
  "AI / Agents": "orange",
  "Data & Cloud": "green",
};

const SkillsRow = ({ category }: { category: SkillCategory }) => {
  const color = categoryColor[category.title] ?? "gray";
  return (
    <div className="skills-row">
      <p className="skills-row__title">{category.title}</p>
      <div className="tag-row">
        {category.items.map((item) => (
          <Tag key={item} label={item} color={color} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = ({ profile }: SkillsSectionProps) => {
  return (
    <ToggleSection
      id="skills"
      icon="🛠️"
      title="Skills"
      description="Languages and frameworks I ship with, plus the AI/agent-specific stack."
    >
      <div className="skills-list">
        {profile.skills.map((category) => (
          <SkillsRow key={category.title} category={category} />
        ))}
      </div>
    </ToggleSection>
  );
};

export default SkillsSection;
