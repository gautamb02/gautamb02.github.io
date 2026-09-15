import StatCard from "../components/StatCard";
import { ProfileData } from "../types";

type HeroProps = {
  profile: ProfileData;
};

const Hero = ({ profile }: HeroProps) => {
  return (
    <section id="about" className="about-block">
      <div className="callout">
        <span className="callout__icon">💡</span>
        <div>
          <p className="callout__headline">{profile.headline}</p>
          <p className="callout__bio">{profile.bio}</p>
        </div>
      </div>
      <div className="hero__actions">
        <a className="button" href={`mailto:${profile.contactEmail}`}>
          Say hello
        </a>
        <a className="button button--ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          Download résumé
        </a>
      </div>
      <div className="hero__stats">
        {profile.stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
