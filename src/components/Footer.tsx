import { ProfileData } from "../types";

type FooterProps = {
  profile: ProfileData;
};

const lastEdited = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

const Footer = ({ profile }: FooterProps) => {
  return (
    <footer className="page-footer">
      <p className="page-footer__edited">Last updated {lastEdited}</p>
      <div className="footer-links">
        {profile.socials.map((social) => (
          <a key={social.platform} href={social.url} target="_blank" rel="noreferrer">
            {social.platform}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
