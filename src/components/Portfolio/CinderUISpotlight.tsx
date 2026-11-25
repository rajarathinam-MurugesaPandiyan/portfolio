import { useState } from "react";
import { OPEN_SOURCE_SPOTLIGHT } from "../../constants";

export const CinderUISpotlight = () => {
  const [copied, setCopied] = useState(false);
  const [previewTab, setPreviewTab] = useState<"ui" | "tokens">("ui");
  const [shieldEnabled, setShieldEnabled] = useState(true);

  const handleCopyInstall = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(
          OPEN_SOURCE_SPOTLIGHT.installCommand,
        );
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article
      id="cinder-ui-spotlight"
      className="cinder-spotlight"
      aria-labelledby="cinder-spotlight-title"
    >
      <div className="cinder-spotlight-grid">
        {/* Left: Founder Story, Metrics, Install Bar & Links */}
        <div className="cinder-spotlight-content">
          <div className="cinder-spotlight-badges">
            <span className="cinder-founder-badge">
              <span className="cinder-spark-dot" aria-hidden="true"></span>
              <span>{OPEN_SOURCE_SPOTLIGHT.badge}</span>
            </span>
            <span className="cinder-meta-pill">
              {OPEN_SOURCE_SPOTLIGHT.roleBadge}
            </span>
            <span className="cinder-live-pill">
              <span className="status-dot" aria-hidden="true"></span>
              <span>{OPEN_SOURCE_SPOTLIGHT.versionBadge}</span>
            </span>
            <span className="cinder-meta-pill">
              {OPEN_SOURCE_SPOTLIGHT.licenseBadge}
            </span>
          </div>

          <div className="cinder-title-block">
            <h3 id="cinder-spotlight-title" className="cinder-spotlight-title">
              {OPEN_SOURCE_SPOTLIGHT.name}
            </h3>
            <code className="cinder-package-pill">
              {OPEN_SOURCE_SPOTLIGHT.packageName}
            </code>
          </div>

          <p className="cinder-spotlight-tagline">
            {OPEN_SOURCE_SPOTLIGHT.tagline}
          </p>
          <p className="cinder-spotlight-desc">
            {OPEN_SOURCE_SPOTLIGHT.description}
          </p>

          {/* Architecture Highlights */}
          <div className="cinder-metrics-row">
            {OPEN_SOURCE_SPOTLIGHT.highlights.map((item) => (
              <div className="cinder-metric-box" key={item.label}>
                <span className="cinder-metric-value">{item.value}</span>
                <span className="cinder-metric-label">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Copyable Install Command */}
          <div className="cinder-install-bar">
            <div className="cinder-install-code-wrap">
              <span className="cinder-prompt" aria-hidden="true">
                $
              </span>
              <code className="cinder-install-command">
                {OPEN_SOURCE_SPOTLIGHT.installCommand}
              </code>
            </div>
            <button
              type="button"
              className={`cinder-copy-btn ${copied ? "copied" : ""}`}
              onClick={handleCopyInstall}
              aria-label={
                copied ? "Install command copied" : "Copy install command"
              }
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <span className="visually-hidden" role="status" aria-live="polite">
            {copied ? "Install command copied to clipboard" : ""}
          </span>

          {/* Action Links */}
          <div className="cinder-actions">
            <a
              href={OPEN_SOURCE_SPOTLIGHT.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinder-btn-primary"
            >
              <span>Explore Live Docs</span>
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href={OPEN_SOURCE_SPOTLIGHT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinder-btn-secondary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href={OPEN_SOURCE_SPOTLIGHT.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinder-btn-secondary"
            >
              <span>npm Package</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Cinder Slate Mini-Preview */}
        <div className="cinder-preview-panel">
          <div className="cinder-preview-header">
            <div className="cinder-preview-dots" aria-hidden="true">
              <span className="dot dot-r"></span>
              <span className="dot dot-y"></span>
              <span className="dot dot-g"></span>
            </div>
            <span className="cinder-preview-label">Cinder Slate Preview</span>
            <div
              className="cinder-preview-tabs"
              role="tablist"
              aria-label="Cinder UI preview mode"
            >
              <button
                type="button"
                role="tab"
                aria-selected={previewTab === "ui"}
                className={`cinder-preview-tab ${previewTab === "ui" ? "active" : ""}`}
                onClick={() => setPreviewTab("ui")}
              >
                Interactive UI
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={previewTab === "tokens"}
                className={`cinder-preview-tab ${previewTab === "tokens" ? "active" : ""}`}
                onClick={() => setPreviewTab("tokens")}
              >
                CSS Tokens
              </button>
            </div>
          </div>

          {previewTab === "ui" ? (
            <div className="cinder-preview-body">
              <div className="cinder-mock-card">
                <div className="cinder-mock-card-top">
                  <div>
                    <div className="cinder-mock-title">
                      Design System Surface
                    </div>
                    <div className="cinder-mock-sub">
                      Accessible headless primitives
                    </div>
                  </div>
                  <span
                    className={`cinder-mock-status ${shieldEnabled ? "enabled" : "paused"}`}
                  >
                    {shieldEnabled ? "Synchronized" : "Standby"}
                  </span>
                </div>

                <div className="cinder-mock-switch-row">
                  <div className="cinder-mock-switch-text">
                    <span className="cinder-mock-switch-title">
                      Token-Driven Theme Engine
                    </span>
                    <span className="cinder-mock-switch-desc">
                      Zero CSS-in-JS runtime overhead
                    </span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={shieldEnabled}
                    aria-label="Toggle token-driven theme engine preview"
                    className={`cinder-switch ${shieldEnabled ? "on" : ""}`}
                    onClick={() => setShieldEnabled((prev) => !prev)}
                  >
                    <span className="cinder-switch-thumb" />
                  </button>
                </div>

                <div className="cinder-primitives-chips">
                  {OPEN_SOURCE_SPOTLIGHT.previewPrimitives.map((prim) => (
                    <span className="cinder-primitive-chip" key={prim}>
                      {prim}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="cinder-preview-body">
              <pre className="cinder-tokens-code">
                <code>{`:root {
  /* Zero-runtime Cinder Slate override */
  --cinder-primary: #3b82f6;
  --cinder-surface: #09090b;
  --cinder-border: #27272a;
  --cinder-radius: 0.75rem;
}`}</code>
              </pre>
              <div className="cinder-tech-badges-row">
                {OPEN_SOURCE_SPOTLIGHT.architectureTags.map((tag) => (
                  <span className="slide-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
