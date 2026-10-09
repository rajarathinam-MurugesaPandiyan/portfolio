import { useState, useEffect } from "react";
import { FEATURED_SLIDES, CAROUSEL_CONSTANTS } from "../../constants";

interface FeaturedCarouselProps {
  categories: string[];
}

export const FeaturedCarousel = ({ categories }: FeaturedCarouselProps) => {
  const slides = FEATURED_SLIDES;

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  const handleCategoryClick = (idx: number, cat: string) => {
    setSelectedCategory(idx);
    const catLower = cat.toLowerCase();
    const matchIdx = slides.findIndex((slide) => {
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
            t.toLowerCase().includes("mobile"),
        )
      )
        return true;
      return false;
    });
    if (matchIdx !== -1) {
      setActiveIndex(matchIdx);
    }
  };

  const statusClass =
    activeSlide.status === "Live" ? "status-live" : "status-in-progress";

  return (
    <div className="featured-project">
      <div className="featured-project-card">
        <div className="card-content-overlay">
          <div className="card-top-badges">
            <span className="featured-badge">{CAROUSEL_CONSTANTS.badgeText}</span>
            <span
              className={`project-status-badge ${statusClass}`}
              data-testid="carousel-card-status"
            >
              <span className="status-dot"></span>
              <span>{activeSlide.statusBadge}</span>
            </span>
          </div>
          <h2 className="lirante-title">
            {activeSlide.title}
          </h2>
          <div className="carousel-slide-tags">
            {activeSlide.tags.map((tag, tIdx) => (
              <span key={tIdx} className="slide-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="portfolio-controls">
        <div className="dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              style={{ cursor: "pointer" }}
              title={`Slide ${idx + 1}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="portfolio-filter">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-pill ${idx === selectedCategory ? "active" : ""}`}
            onClick={() => handleCategoryClick(idx, cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="featured-info">
        <div
          key={activeIndex}
          style={{ animation: "carouselFadeIn 0.5s ease" }}
        >
          <h3 className="featured-title">
            <span>{activeSlide.subtitle}</span>
            <span
              className={`project-status-pill ${statusClass}`}
              data-testid="carousel-info-status"
            >
              <span className="status-dot"></span>
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
        </div>
      </div>
    </div>
  );
};
