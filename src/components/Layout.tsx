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
      <Header profile={profile} />
      <main className="main-content">{children}</main>
      <Footer profile={profile} />
    </div>
  );
};

export default Layout;

