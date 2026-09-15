import { PropsWithChildren, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import PanelIcon from "./PanelIcon";
import { ProfileData } from "../types";

type LayoutProps = PropsWithChildren<{
  profile: ProfileData;
}>;

const getInitialCollapsed = () => {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("sidebar-collapsed") === "true";
  } catch {
    return false;
  }
};

const Layout = ({ profile, children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(getInitialCollapsed());
  }, []);

  const toggleCollapsed = () => {
    setCollapsed((c) => {
      const next = !c;
      try {
        window.localStorage.setItem("sidebar-collapsed", String(next));
      } catch {
        // per-visitor convenience only, safe to skip persisting
      }
      return next;
    });
  };

  return (
    <div className={`app-shell ${collapsed ? "app-shell--collapsed" : ""}`}>
      <Sidebar
        profile={profile}
        open={sidebarOpen}
        collapsed={collapsed}
        onNavigate={() => setSidebarOpen(false)}
        onToggleCollapse={toggleCollapsed}
      />
      {sidebarOpen && <div className="sidebar-scrim" onClick={() => setSidebarOpen(false)} />}
      {collapsed && (
        <button
          type="button"
          className="sidebar-expand-button"
          onClick={toggleCollapsed}
          aria-label="Show sidebar"
          title="Show sidebar"
        >
          <PanelIcon />
        </button>
      )}
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
