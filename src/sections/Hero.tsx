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
        <Pill label={profile.availability} />
        <h2>{profile.headline}</h2>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__actions">
          <a className="button" href={`mailto:${profile.contactEmail}`}>
            Say hello
          </a>
          <a className="button button--ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </div>
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

