import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import PanelIcon from "./PanelIcon";
import { ProfileData } from "../types";

const navItems = [
  { id: "about", label: "About", icon: "🏠" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "publications", label: "Publications", icon: "📄" },
  { id: "skills", label: "Skills", icon: "🛠️" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

type SidebarProps = {
  profile: ProfileData;
  open: boolean;
  collapsed: boolean;
  onNavigate: () => void;
  onToggleCollapse: () => void;
};

const Sidebar = ({ profile, open, collapsed, onNavigate, onToggleCollapse }: SidebarProps) => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`sidebar ${open ? "sidebar--open" : ""} ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div className="sidebar__workspace">
        <img className="sidebar__workspace-icon" src="/avatar.png" alt="" />
        <span>{profile.name}</span>
        <button
          type="button"
          className="sidebar-collapse-button"
          onClick={onToggleCollapse}
          aria-label="Collapse sidebar"
          title="Collapse sidebar"
        >
          <PanelIcon />
        </button>
      </div>
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`sidebar__item ${active === item.id ? "sidebar__item--active" : ""}`}
            onClick={onNavigate}
          >
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="sidebar__footer">
        <a className="sidebar__item" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          <span>📎</span>Resume
        </a>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
