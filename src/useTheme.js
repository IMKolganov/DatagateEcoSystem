import { useEffect, useState } from "react";

const STORAGE_KEY = "datagate-theme";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark" || saved === "system") {
    return saved;
  }
  return "system";
}

function resolveTheme(theme) {
  return theme === "system" ? getSystemTheme() : theme;
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [resolved, setResolved] = useState(() => resolveTheme(getInitialTheme()));

  useEffect(() => {
    const applied = resolveTheme(theme);
    setResolved(applied);
    document.documentElement.dataset.theme = applied;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme === "system") {
        const applied = getSystemTheme();
        setResolved(applied);
        document.documentElement.dataset.theme = applied;
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((current) => {
      if (current === "system") return "light";
      if (current === "light") return "dark";
      return "system";
    });
  };

  return { theme, resolved, cycleTheme };
}
