import ToggleSection from "../components/ToggleSection";
import { Publication, ProfileData } from "../types";

type PublicationsSectionProps = {
  profile: ProfileData;
};

const PublicationRow = ({ publication }: { publication: Publication }) => {
  return (
    <article className="block-item">
      <header>
        <h3>{publication.title}</h3>
        <div className="block-item__links">
          <a href={publication.url} target="_blank" rel="noreferrer">
            DOI
          </a>
        </div>
      </header>
      <p className="subtitle block-line">
        {publication.venue} · {publication.year}
      </p>
    </article>
  );
};

const PublicationsSection = ({ profile }: PublicationsSectionProps) => {
  return (
    <ToggleSection
      id="publications"
      icon="📄"
      title="Publications"
      description="Peer-reviewed work, indexed on ORCID."
    >
      <div className="block-list">
        {profile.publications.map((publication) => (
          <PublicationRow key={publication.url} publication={publication} />
        ))}
      </div>
    </ToggleSection>
  );
};

export default PublicationsSection;
