import Section from "../components/Section";
import { ProfileData } from "../types";

type ContactSectionProps = {
  profile: ProfileData;
};

const ContactSection = ({ profile }: ContactSectionProps) => {
  return (
    <Section
      id="contact"
      title="Contact"
      description="I reply within 24 hours and love pairing on scrappy prototypes, dashboards, and product strategy."
    >
      <div className="contact-grid">
        {profile.Contact.map((channel) => (
          <a key={channel.label} className="contact-card" href={channel.href} target="_blank" rel="noreferrer">
            <span style={{ fontSize: "0.875rem", color: "var(--text-light)" }}>{channel.label}:</span>
            <span className="contact-card__value">{channel.value}</span>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default ContactSection;

