import { useState, useEffect } from 'react';

interface FeaturedCarouselProps {
  categories: string[];
}

export const FeaturedCarousel = ({ categories }: FeaturedCarouselProps) => {
  const slides = [
    {
      id: 1,
      title: "Xpense",
      subtitle: "Xpense - Personal Finance & Expense Tracker",
      description: "A comprehensive expense tracking application designed to help users manage personal finances effectively. Features intuitive analytics for tracking daily spend, budgeting, and financial trajectory over time.",
      bgColor: "#1E293B",
      textColor: "#38BDF8",
      tags: ["React", "TypeScript", "Node.js", "Chart.js"],
      githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan"
    },
    {
      id: 2,
      title: "OmniStack",
      subtitle: "OmniStack - Scalable Multi-Tenant SaaS",
      description: "A comprehensive high-performance backend and dashboard engineered for seamless data pipelines, secure multi-tenant access, and automated workflow orchestrations.",
      bgColor: "#0F172A",
      textColor: "#818CF8",
      tags: ["Go", "Next.js", "PostgreSQL", "Docker", "REST API"],
      githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan"
    },
    {
      id: 3,
      title: "Streako",
      subtitle: "Streako - Cross-Platform Habit Tracker",
      description: "A habit-building mobile application designed to cultivate positive daily routines. Delivers native-feel 60fps animations, streak notifications, and offline data persistence.",
      bgColor: "#064E3B",
      textColor: "#34D399",
      tags: ["Flutter", "Dart", "Provider", "Local SQLite"],
      githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="featured-project">
      <div 
        className="featured-project-card" 
        style={{ backgroundColor: activeSlide.bgColor, transition: 'background-color 0.5s ease' }}
      >
        <div className="card-content-overlay">
          <span className="featured-badge">Featured Case Study</span>
          <h2 className="lirante-title" style={{ color: activeSlide.textColor, transition: 'color 0.5s ease' }}>
            {activeSlide.title}
          </h2>
          <div className="carousel-slide-tags">
            {activeSlide.tags.map((tag, tIdx) => (
              <span key={tIdx} className="slide-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="portfolio-controls">
        <div className="dots">
          {slides.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              style={{ cursor: 'pointer' }}
              title={`Slide ${idx + 1}`}
            ></span>
          ))}
        </div>
      </div>
      
      <div className="portfolio-filter">
        {categories.map((cat, idx) => (
          <button 
            key={idx} 
            className={`filter-pill ${idx === selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(idx)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="featured-info" style={{ animation: 'carouselFadeIn 0.5s ease' }} key={activeIndex}>
        <h3 className="featured-title">
          {activeSlide.subtitle}
          <a 
            href={activeSlide.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="arrow-badge"
            title="View Project on GitHub"
            aria-label="View Project on GitHub"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </h3>
        <p className="featured-desc">{activeSlide.description}</p>
      </div>
    </div>
  );
};
