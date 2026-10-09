import React, { useState, useEffect, useRef } from "react";
import { THEMES, getSavedTheme, applyTheme, type ThemeId } from "../../theme";
import "./ThemeSwitcher.css";

interface ThemeSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = "",
  isMobile = false,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("electric-cyan");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialTheme = getSavedTheme();
    setCurrentTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectTheme = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  const activeTheme = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  if (isMobile) {
    return (
      <div className="mobile-theme-switcher">
        <div className="mobile-theme-header">
          <span className="mobile-theme-label">Theme Palette</span>
          <span className="mobile-theme-active-name">{activeTheme.name}</span>
        </div>
        <div className="mobile-theme-grid">
          {THEMES.map((theme) => {
            const isSelected = theme.id === currentTheme;
            return (
              <button
                key={theme.id}
                type="button"
                className={`mobile-theme-card ${isSelected ? "active" : ""}`}
                onClick={() => handleSelectTheme(theme.id)}
                title={`Switch to ${theme.name}`}
              >
                <div className="theme-duotone-preview">
                  <span
                    className="theme-dot primary"
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <span
                    className="theme-dot accent"
                    style={{ backgroundColor: theme.accentColor }}
                  />
                </div>
                <div className="mobile-theme-card-info">
                  <span className="theme-card-name">{theme.name}</span>
                  <span className="theme-card-tag">{theme.tag}</span>
                </div>
                {isSelected && (
                  <svg
                    className="theme-check-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`theme-switcher-wrapper ${className}`}>
      <button
        type="button"
        className={`theme-switcher-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select theme palette"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change theme palette"
      >
        <span className="theme-indicator-duo">
          <span
            className="theme-dot primary"
            style={{ backgroundColor: activeTheme.primaryColor }}
          />
          <span
            className="theme-dot accent"
            style={{ backgroundColor: activeTheme.accentColor }}
          />
        </span>
        <span className="theme-trigger-label">Theme</span>
        <svg
          className={`theme-caret ${isOpen ? "open" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="theme-dropdown-popover"
          role="dialog"
          aria-label="Theme options"
        >
          <div className="theme-popover-header">
            <span className="theme-popover-title">Palette Presets</span>
            <span className="theme-popover-count">{THEMES.length} Themes</span>
          </div>

          <div className="theme-options-list" role="listbox">
            {THEMES.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`theme-option-item ${isSelected ? "selected" : ""}`}
                  onClick={() => handleSelectTheme(theme.id)}
                >
                  <div className="theme-duotone-preview">
                    <span
                      className="theme-dot primary"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <span
                      className="theme-dot accent"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                  </div>
                  <div className="theme-option-details">
                    <span className="theme-option-name">{theme.name}</span>
                    <span className="theme-option-tag">{theme.tag}</span>
                  </div>
                  {isSelected && (
                    <svg
                      className="theme-check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
