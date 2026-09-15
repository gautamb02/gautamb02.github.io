import { createContext, useContext, useEffect, useState, PropsWithChildren } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable — fall through to the default
  }
  // Light is the default regardless of OS/browser preference; dark only
  // applies once a visitor explicitly toggles it (persisted above).
  return "light";
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  // Always start at "light" so the client's first render matches the
  // prerendered (server) markup exactly — the real preference (which may
  // differ per visitor and isn't knowable at prerender time) is applied a
  // moment later via the effect below, avoiding a hydration mismatch.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ignore — per-visitor preference only, safe to skip persisting
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
