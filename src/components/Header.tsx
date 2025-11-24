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
        <div>
          <p className="eyebrow">Portfolio · Gautam Bhagat</p>
          <h1>{profile.name}</h1>
          <p className="subtitle">
            {profile.role} · {profile.location}
          </p>
        </div>
        <a className="button button--ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          View résumé
        </a>
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

