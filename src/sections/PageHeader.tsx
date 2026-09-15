import PropertyRow from "../components/PropertyRow";
import { ProfileData } from "../types";

type PageHeaderProps = {
  profile: ProfileData;
};

const PageHeader = ({ profile }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="cover" style={{ backgroundImage: "url(/cover.png)" }} />
      <div className="page-head">
        <div className="page-icon">
          <img src="/avatar.png" alt="Gautam Bhagat" />
        </div>
        <h1>{profile.name}</h1>
        <div className="properties">
          <PropertyRow icon="💼" label="Role" value={profile.role} />
          <PropertyRow icon="📍" label="Location" value={profile.location} />
          <PropertyRow icon="🟢" label="Status" value={profile.availability} />
          <PropertyRow
            icon="📧"
            label="Email"
            value={profile.contactEmail}
            href={`mailto:${profile.contactEmail}`}
          />
          <PropertyRow icon="🎓" label="ORCID" value={profile.orcid.id} href={profile.orcid.url} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
