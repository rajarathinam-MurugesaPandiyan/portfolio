import { useState, useEffect } from 'react';

interface FeaturedCarouselProps {
  categories: string[];
}

export const FeaturedCarousel = ({ categories }: FeaturedCarouselProps) => {
  const slides = [
    {
      id: 1,
      title: "Xpense",
      subtitle: "Xpense - Expense Tracking Application",
      description: "Xpense is a comprehensive expense tracking application designed to help users manage their personal finances effectively. It provides a simple and intuitive interface for tracking daily expenses, setting budgets, and monitoring spending habits over time.",
      bgColor: "#E2DBD5",
      textColor: "var(--text-light)"
    },
    {
      id: 2,
      title: "OmniStack",
      subtitle: "OmniStack - SaaS",
      description: "A comprehensive dashboard for managing personal finances, tracking expenses, and setting goals securely and efficiently.",
      bgColor: "#1A202C",
      textColor: "#A3A3EC"
    },
    {
      id: 3,
      title: "Streako",
      subtitle: "Streako - Habit Tracker",
      description: "Streako is a habit-tracking application designed to help users build positive habits and break negative ones. It provides a simple and intuitive interface for tracking daily habits, setting reminders, and monitoring progress over time.",
      bgColor: "#E6F4EA",
      textColor: "#299F6C"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds interval
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="featured-project">
      <div 
        className="featured-project-card" 
        style={{ backgroundColor: activeSlide.bgColor, transition: 'background-color 0.5s ease' }}
      >
        <h2 className="lirante-title" style={{ color: activeSlide.textColor, transition: 'color 0.5s ease' }}>
          {activeSlide.title}
        </h2>
      </div>
      
      <div className="portfolio-controls">
        <div className="dots">
          {slides.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              style={{ cursor: 'pointer' }}
            ></span>
          ))}
        </div>
      </div>
      
      <div className="portfolio-filter">
        {categories.map((cat, idx) => (
           <span key={idx} className={`filter-pill ${idx === 0 ? 'active' : ''}`}>{cat}</span>
        ))}
      </div>

      <div className="featured-info" style={{ animation: 'carouselFadeIn 0.5s ease' }} key={activeIndex}>
        <h3 className="featured-title">{activeSlide.subtitle} <span className="arrow-badge">↗</span></h3>
        <p className="featured-desc">{activeSlide.description}</p>
      </div>
    </div>
  );
};
