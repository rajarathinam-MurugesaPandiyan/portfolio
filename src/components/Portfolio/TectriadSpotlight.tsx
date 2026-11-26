import { TECTRIAD_DATA } from "../../constants";

export const TectriadSpotlight = () => {
  return (
    <article
      id="tectriad-spotlight"
      className="tectriad-spotlight"
      aria-labelledby="tectriad-spotlight-title"
    >
      <div className="tectriad-spotlight-grid">
        <div className="tectriad-spotlight-content">
          <div className="cinder-spotlight-badges">
            <span className="cinder-founder-badge">
              <span className="cinder-spark-dot" aria-hidden="true"></span>
              <span>{TECTRIAD_DATA.badge}</span>
            </span>
            <span className="cinder-meta-pill">{TECTRIAD_DATA.roleBadge}</span>
            <span className="cinder-live-pill">
              <span className="status-dot" aria-hidden="true"></span>
              <span>{TECTRIAD_DATA.domainBadge}</span>
            </span>
          </div>

          <div className="cinder-title-block">
            <h3 id="tectriad-spotlight-title" className="cinder-spotlight-title">
              {TECTRIAD_DATA.name}
            </h3>
            <span className="cinder-meta-pill">
              {TECTRIAD_DATA.coFoundersNote}
            </span>
          </div>

          <p className="cinder-spotlight-tagline">{TECTRIAD_DATA.tagline}</p>
          <p className="cinder-spotlight-desc">{TECTRIAD_DATA.description}</p>

          <div className="cinder-actions">
            <a
              href={TECTRIAD_DATA.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cinder-btn-primary"
            >
              <span>Visit Tectriad</span>
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
              href={TECTRIAD_DATA.githubUrl}
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
              <span>Tectriad GitHub</span>
            </a>
          </div>
        </div>

        <div className="tectriad-products-grid">
          {TECTRIAD_DATA.products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tectriad-product-card"
            >
              <div className="tectriad-product-top">
                <span className="tectriad-product-name">{product.name}</span>
                <span className="tectriad-product-category">
                  {product.category}
                </span>
              </div>
              <p className="tectriad-product-desc">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};
