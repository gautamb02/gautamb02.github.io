import ToggleSection from "../components/ToggleSection";
import { ProfileData } from "../types";

type EducationSectionProps = {
  profile: ProfileData;
};

const EducationSection = ({ profile }: EducationSectionProps) => {
  const { education, achievements } = profile;
  return (
    <ToggleSection id="education" icon="🎓" title="Education & recognition">
      <article className="block-item">
        <h3>{education.institution}</h3>
        <p className="subtitle">
          {education.degree} · {education.location} · {education.period}
        </p>
      </article>
      <ul className="education-achievements">
        {achievements.map((item) => (
          <li key={item} className="block-line">
            {item}
          </li>
        ))}
      </ul>
    </ToggleSection>
  );
};

export default EducationSection;
