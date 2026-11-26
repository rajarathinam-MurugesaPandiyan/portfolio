import React, { useState, useEffect } from "react";
import {
  getSavedTheme,
  applyTheme,
  toggleThemePreference,
  type ThemeId,
} from "../../theme";
import "./ThemeSwitcher.css";

interface ThemeSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = "",
  isMobile = false,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() =>
    getSavedTheme(),
  );

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "color-scheme") {
        setCurrentTheme(getSavedTheme());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleToggle = () => {
    const next = toggleThemePreference(currentTheme);
    setCurrentTheme(next);
  };

  const handleSelectExplicit = (target: ThemeId) => {
    if (target === currentTheme) return;
    applyTheme(target, true);
    setCurrentTheme(target);
  };

  const isDark = currentTheme === "dark";

  if (isMobile) {
    return (
      <div className="mobile-theme-switcher">
        <div className="mobile-theme-header">
          <span className="mobile-theme-label">Appearance</span>
          <span className="mobile-theme-active-name">
            {isDark ? "Dark" : "Light"}
          </span>
        </div>
        <div className="mobile-theme-segmented" role="group" aria-label="Theme selection">
          <button
            type="button"
            className={`mobile-theme-seg-btn ${isDark ? "active" : ""}`}
            aria-pressed={isDark}
            onClick={() => handleSelectExplicit("dark")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span>Dark</span>
          </button>
          <button
            type="button"
            className={`mobile-theme-seg-btn ${!isDark ? "active" : ""}`}
            aria-pressed={!isDark}
            onClick={() => handleSelectExplicit("light")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <span>Light</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`theme-toggle-pill ${className}`}
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to Light theme" : "Switch to Dark theme"}
    >
      {isDark ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
};
