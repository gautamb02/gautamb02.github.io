import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProfileData } from "../types";

type LayoutProps = PropsWithChildren<{
  profile: ProfileData;
}>;

const Layout = ({ profile, children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="cover-container">
        <img src="/cover.png" alt="Profile Cover" className="cover-image" />
      </div>
      <div className="page-container">
        <div className="profile-icon">
          <img src="/avatar.png" alt={profile.Name} />
        </div>
        <Header profile={profile} />
        <main className="main-content">{children}</main>
        <Footer profile={profile} />
      </div>
    </div>
  );
};

export default Layout;

