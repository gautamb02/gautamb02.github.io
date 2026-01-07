import { ProfileData } from "../types";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

type HeaderProps = {
  profile: ProfileData;
};

const Header = ({ profile }: HeaderProps) => {
  return (
    <header className="site-header">
      <div className="site-header__branding">
        <h1>{profile.Name}</h1>
      </div>

      <div className="page-properties">
        <div className="property-row">
          <div className="property-label">👤 Role</div>
          <div className="property-value">{profile.Role}</div>
        </div>
        <div className="property-row">
          <div className="property-label">📍 Location</div>
          <div className="property-value">{profile.Location}</div>
        </div>
        <div className="property-row">
          <div className="property-label">✉️ Contact</div>
          <div className="property-value">
            <a href={`mailto:${profile.ContactEmail}`}>{profile.ContactEmail}</a>
          </div>
        </div>
        <div className="property-row">
          <div className="property-label">📄 Résumé</div>
          <div className="property-value">
            <a href={profile.ResumeURL} target="_blank" rel="noreferrer">
              Download.pdf
            </a>
          </div>
        </div>
      </div>

      <nav className="site-nav">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;

