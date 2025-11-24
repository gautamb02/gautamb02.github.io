import Section from "../components/Section";
import { ProfileData } from "../types";

type ContactSectionProps = {
  profile: ProfileData;
};

const ContactSection = ({ profile }: ContactSectionProps) => {
  return (
    <Section
      id="contact"
      eyebrow="Next step"
      title="Let's build the next release together."
      description="I reply within 24 hours and love pairing on scrappy prototypes, dashboards, and product strategy."
    >
      <div className="contact-grid">
        {profile.contact.map((channel) => (
          <a key={channel.label} className="contact-card" href={channel.href} target="_blank" rel="noreferrer">
            <p className="eyebrow">{channel.label}</p>
            <p className="contact-card__value">{channel.value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default ContactSection;

