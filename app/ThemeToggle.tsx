"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setTheme(currentTheme()));
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("mertzhands-theme", nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Use ${isDark ? "light" : "dark"} appearance`}
      title={`Use ${isDark ? "light" : "dark"} appearance`}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-sun" aria-hidden="true">
        <svg viewBox="0 0 18 18" focusable="false">
          <circle cx="9" cy="9" r="3.25" />
          <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M14.3 3.7l-1.4 1.4M5.1 12.9l-1.4 1.4" />
        </svg>
      </span>
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-moon" aria-hidden="true">
        <svg viewBox="0 0 18 18" focusable="false">
          <circle cx="9" cy="9" r="6.25" />
          <path d="M10.9 3.05a6.3 6.3 0 0 0 0 11.9" />
        </svg>
      </span>
    </button>
  );
}
