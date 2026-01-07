import Pill from "../components/Pill";
import StatCard from "../components/StatCard";
import { ProfileData } from "../types";

type HeroProps = {
  profile: ProfileData;
};

const Hero = ({ profile }: HeroProps) => {
  return (
    <section id="about" className="hero">
      <div className="hero__copy">
        <div className="callout" style={{ padding: "12px", background: "rgb(241, 241, 239)", borderRadius: "4px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "2rem", border: "1px solid var(--border)" }}>
          <span style={{ fontSize: "1.5rem" }}>🔔</span>
          <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 500 }}>{profile.Availability}</p>
        </div>
        <p className="hero__bio">{profile.Bio}</p>
        <div className="hero__actions">
          <a className="button" href={`mailto:${profile.ContactEmail}`}>
            Say hello
          </a>
          <a className="button button--ghost" href={profile.ResumeURL} target="_blank" rel="noreferrer">
            View résumé
          </a>
        </div>
      </div>
      <div className="hero__stats">
        {profile.Stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default Hero;

