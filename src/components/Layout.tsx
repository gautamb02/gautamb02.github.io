import { PropsWithChildren, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { ProfileData } from "../types";

type LayoutProps = PropsWithChildren<{
  profile: ProfileData;
}>;

const Layout = ({ profile, children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar profile={profile} open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen && <div className="sidebar-scrim" onClick={() => setSidebarOpen(false)} />}
      <div className="page">
        <div className="mobile-topbar">
          <button
            type="button"
            className="icon-button"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <span>{profile.name}</span>
        </div>
        <main className="page-content">{children}</main>
        <Footer profile={profile} />
      </div>
    </div>
  );
};

export default Layout;
