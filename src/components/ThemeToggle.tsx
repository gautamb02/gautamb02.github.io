import { useTheme } from "../theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button type="button" className="sidebar__item theme-toggle" onClick={toggle}>
      <span>{theme === "light" ? "🌙" : "☀️"}</span>
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
};

export default ThemeToggle;
