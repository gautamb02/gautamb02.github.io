import { ProfileData } from "../types";

type FooterProps = {
  profile: ProfileData;
};

const Footer = ({ profile }: FooterProps) => {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Stay in touch</p>
        <p className="subtitle">{profile.Availability}</p>
      </div>
      <div className="footer-links">
        {profile.Socials.map((social) => (
          <a key={social.platform} href={social.url} target="_blank" rel="noreferrer">
            {social.platform}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

