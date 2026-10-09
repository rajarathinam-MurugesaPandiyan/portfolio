import React, { useState } from "react";
import {
  TECH_STACK_HEADER,
  TECH_STACK_TABS,
  TECH_STACK_HIGHLIGHTS,
  TECH_STACK_ITEMS,
  type TechCategory,
  type TechItem,
} from "../../constants";
import "./TechStack.css";

// Vector brand / tech icons for frameworks and infrastructure
const renderFrameworkSvg = (iconName?: string) => {
  switch (iconName) {
    case "react":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="tech-vector-icon react-icon"
          aria-hidden="true"
        >
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="currentColor"
            strokeWidth="1.6"
            transform="rotate(0 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="currentColor"
            strokeWidth="1.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="currentColor"
            strokeWidth="1.6"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case "flutter":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="tech-vector-icon flutter-icon"
          aria-hidden="true"
        >
          <path d="M14.314 0L2.3 12.014l3.696 3.696L21.706 0H14.314zm0 10.428l-5.6 5.6 3.696 3.696 5.6-5.6-3.696-3.696zm7.392 7.393l-3.696-3.696-3.696 3.696 3.696 3.696 3.696-3.696z" />
        </svg>
      );
    case "server":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tech-vector-icon server-icon"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="10" y1="6" x2="18" y2="6" />
          <line x1="10" y1="18" x2="18" y2="18" />
        </svg>
      );
    case "kafka":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tech-vector-icon kafka-icon"
          aria-hidden="true"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "database":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tech-vector-icon db-icon"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "docker":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tech-vector-icon docker-icon"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="3" height="3" />
          <rect x="7" y="11" width="3" height="3" />
          <rect x="11" y="11" width="3" height="3" />
          <rect x="7" y="7" width="3" height="3" />
          <rect x="11" y="7" width="3" height="3" />
          <rect x="15" y="7" width="3" height="3" />
          <path d="M2 14c1 2 4 4 10 4 8 0 10-5 10-5s-1-1-3-1c-1 0-2 1-3 1s-2-2-4-2c-3 0-5 2-8 3H2z" />
          <circle cx="19" cy="13" r="0.7" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tech-vector-icon"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>("all");

  const filteredItems: TechItem[] =
    activeTab === "all"
      ? TECH_STACK_ITEMS
      : TECH_STACK_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="tech-stack-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="tech-stack-header-wrapper">
          <div className="tech-stack-badge">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>{TECH_STACK_HEADER.badge}</span>
          </div>
          <h2 className="tech-stack-title">
            {TECH_STACK_HEADER.title}{" "}
            <span className="highlight-primary">
              {TECH_STACK_HEADER.highlight}
            </span>
          </h2>
          <p className="tech-stack-subtitle">{TECH_STACK_HEADER.subtitle}</p>
        </div>

        {/* Highlight Summary Strip */}
        <div className="tech-highlights-strip">
          {TECH_STACK_HIGHLIGHTS.map((item, idx) => (
            <div className="tech-highlight-pill" key={idx}>
              <span className="highlight-pill-label">{item.label}</span>
              <span className="highlight-pill-value">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div
          className="tech-filter-tabs"
          role="tablist"
          aria-label="Technology Categories"
        >
          {TECH_STACK_TABS.map((tab) => {
            const count =
              tab.id === "all"
                ? TECH_STACK_ITEMS.length
                : TECH_STACK_ITEMS.filter((t) => t.category === tab.id).length;
            const isSelected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                className={`tech-tab-btn ${isSelected ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id as TechCategory)}
              >
                <span>{tab.label}</span>
                <span className="tech-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <div className="tech-grid" key={activeTab}>
          {filteredItems.map((item) => {
            const isLanguage = item.category === "language";

            return (
              <div
                key={item.id}
                className={`tech-card ${isLanguage ? "language-card" : "framework-card"}`}
              >
                <div className="tech-card-top-row">
                  <div
                    className={`tech-icon-container ${
                      isLanguage ? "image-icon-container" : "svg-icon-container"
                    }`}
                  >
                    {item.iconType === "image" && item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={`${item.name} logo`}
                        className="tech-brand-image"
                        loading="lazy"
                      />
                    ) : (
                      renderFrameworkSvg(item.svgIcon)
                    )}
                  </div>

                  <div className="tech-header-info">
                    <div className="tech-name-row">
                      <h3 className="tech-name">{item.name}</h3>
                      <span className="tech-experience-pill">{item.experience}</span>
                    </div>
                    <div className="tech-meta-badges">
                      <span className="tech-category-pill">{item.categoryLabel}</span>
                      <span className="tech-level-badge">
                        <span className="level-dot"></span>
                        {item.level}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="tech-desc">{item.description}</p>

                <div className="tech-tags-list">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
