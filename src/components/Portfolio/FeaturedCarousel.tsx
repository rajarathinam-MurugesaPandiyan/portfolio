import { useState, useEffect, useRef } from "react";
import { FEATURED_SLIDES, CAROUSEL_CONSTANTS } from "../../constants";

interface FeaturedCarouselProps {
  categories: string[];
  activeSlideIndex?: number;
  onSlideChange?: (index: number) => void;
}

export const FeaturedCarousel = ({
  categories,
  activeSlideIndex,
  onSlideChange,
}: FeaturedCarouselProps) => {
  const slides = FEATURED_SLIDES;

  const [internalIndex, setInternalIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  const activeIndex =
    typeof activeSlideIndex === "number" ? activeSlideIndex : internalIndex;

  const setSlide = (nextIdx: number, announce = true) => {
    const normalized = (nextIdx + slides.length) % slides.length;
    setInternalIndex(normalized);
    onSlideChange?.(normalized);
    if (announce) {
      const target = slides[normalized];
      setAnnouncement(
        `Slide ${normalized + 1} of ${slides.length}: ${target.title}`,
      );
    }
  };

  useEffect(() => {
    if (isPaused || isHoveredOrFocused) return;
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % slides.length;
      setInternalIndex(next);
      onSlideChange?.(next);
    }, 9000);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, isHoveredOrFocused, slides.length, onSlideChange]);

  const activeSlide = slides[activeIndex];

  const handleCategoryClick = (idx: number, cat: string) => {
    setSelectedCategory(idx);
    const catLower = cat.toLowerCase();
    const matchIdx = slides.findIndex((slide) => {
      if (
        (catLower.includes("design system") || catLower.includes("open source")) &&
        slide.tags.some(
          (t) =>
            t.toLowerCase().includes("design system") ||
            t.toLowerCase().includes("open source"),
        )
      )
        return true;
      if (
        catLower.includes("react") &&
        slide.tags.some((t) => t.toLowerCase().includes("react"))
      )
        return true;
      if (
        catLower.includes("go") &&
        slide.tags.some((t) => t.toLowerCase().includes("go"))
      )
        return true;
      if (
        catLower.includes("flutter") &&
        slide.tags.some((t) => t.toLowerCase().includes("flutter"))
      )
        return true;
      if (
        catLower.includes("api") &&
        slide.tags.some(
          (t) =>
            t.toLowerCase().includes("api") || t.toLowerCase().includes("rest"),
        )
      )
        return true;
      if (
        catLower.includes("cloud") &&
        (slide.title.toLowerCase().includes("cloud") ||
          slide.tags.some(
            (t) =>
              t.toLowerCase().includes("cloud") ||
              t.toLowerCase().includes("docker"),
          ))
      )
        return true;
      if (
        catLower.includes("ui") &&
        slide.tags.some(
          (t) =>
            t.toLowerCase().includes("ui") ||
            t.toLowerCase().includes("design system") ||
            t.toLowerCase().includes("mobile"),
        )
      )
        return true;
      return false;
    });
    if (matchIdx !== -1) {
      setSlide(matchIdx, true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "A"
    ) {
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSlide(activeIndex - 1, true);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSlide(activeIndex + 1, true);
    }
  };

  const statusClass =
    activeSlide.status === "Live" ? "status-live" : "status-in-progress";

  return (
    <div
      className="featured-project"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured engineering projects"
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocusCapture={() => setIsHoveredOrFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsHoveredOrFocused(false);
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <div
        className="featured-project-card"
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${slides.length}`}
      >
        <div className="carousel-nav-controls">
          <button
            ref={prevBtnRef}
            type="button"
            className="carousel-nav-btn"
            onClick={() => setSlide(activeIndex - 1, true)}
            aria-label="Previous slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={
              isPaused ? "Resume auto-rotation" : "Pause auto-rotation"
            }
          >
            {isPaused ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => setSlide(activeIndex + 1, true)}
            aria-label="Next slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="card-content-overlay">
          <div className="card-top-badges">
            <span className="featured-badge">
              {activeSlide.role || CAROUSEL_CONSTANTS.badgeText}
            </span>
            <span
              className={`project-status-badge ${statusClass}`}
              data-testid="carousel-card-status"
            >
              <span className="status-dot" aria-hidden="true"></span>
              <span>{activeSlide.statusBadge}</span>
            </span>
          </div>
          <h2 className="lirante-title">{activeSlide.title}</h2>
          <div className="carousel-slide-tags">
            {activeSlide.tags.map((tag, tIdx) => (
              <span key={tIdx} className="slide-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="visually-hidden" role="status" aria-live="polite">
        {announcement}
      </p>

      <nav className="portfolio-controls" aria-label="Choose a project slide">
        <div className="dots">
          {slides.map((slide, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                className={`dot-marker ${isCurrent ? "active" : ""}`}
                onClick={() => setSlide(idx, true)}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                aria-current={isCurrent ? "true" : undefined}
                title={`Slide ${idx + 1}`}
              >
                <span className="dot-visual" aria-hidden="true"></span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="portfolio-filter" aria-label="Project categories">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-pill ${idx === selectedCategory ? "active" : ""}`}
            onClick={() => handleCategoryClick(idx, cat)}
            aria-pressed={idx === selectedCategory}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="featured-info">
        <div key={activeIndex} className="featured-info-animated">
          <h3 className="featured-title">
            <span>{activeSlide.subtitle}</span>
            <span
              className={`project-status-pill ${statusClass}`}
              data-testid="carousel-info-status"
            >
              <span className="status-dot" aria-hidden="true"></span>
              <span>{activeSlide.statusBadge}</span>
            </span>
            <a
              href={activeSlide.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-badge"
              title={CAROUSEL_CONSTANTS.viewGithubTitle}
              aria-label={CAROUSEL_CONSTANTS.viewGithubTitle}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </h3>
          <p className="featured-desc">{activeSlide.description}</p>

          {(activeSlide.liveUrl || activeSlide.npmUrl) && (
            <div className="featured-slide-links">
              {activeSlide.liveUrl && (
                <a
                  href={activeSlide.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-slide-link primary"
                >
                  <span>{CAROUSEL_CONSTANTS.viewLiveTitle}</span>
                </a>
              )}
              {activeSlide.npmUrl && (
                <a
                  href={activeSlide.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-slide-link"
                >
                  <span>{CAROUSEL_CONSTANTS.viewNpmTitle}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
