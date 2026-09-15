import ToggleSection from "../components/ToggleSection";
import { ProfileData } from "../types";

type ContactSectionProps = {
  profile: ProfileData;
};

const ContactSection = ({ profile }: ContactSectionProps) => {
  return (
    <ToggleSection
      id="contact"
      icon="✉️"
      title="Get in touch"
      description="Reach out about roles, collaborations, or anything agent/infra related."
    >
      <div className="contact-list">
        {profile.contact.map((channel) => (
          <a key={channel.label} className="contact-row" href={channel.href} target="_blank" rel="noreferrer">
            <span className="contact-row__label">{channel.label}</span>
            <span className="contact-row__value">{channel.value}</span>
          </a>
        ))}
      </div>
    </ToggleSection>
  );
};

export default ContactSection;
