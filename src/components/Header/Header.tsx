import { useState, useEffect } from 'react';
import './Header.css';

export const Header = () => {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Force 'contact' active when user hits the very bottom of the page
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveId('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id], footer[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'service', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'project', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset for the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <header className="header">
        <a href="#home" className="logo" onClick={(e) => handleClick(e, 'home')}>
          <span className="logo-icon">RR</span>
          <span className="logo-text">Rajarathinam</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-right">
          {navItems.map(({ id, label }) => (
            <a 
              key={id}
              href={`#${id}`} 
              className={`nav-link ${activeId === id ? 'active' : ''}`}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/rajarathinam-MurugesaPandiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map(({ id, label }) => (
            <a 
              key={id}
              href={`#${id}`} 
              className={`mobile-nav-link ${activeId === id ? 'active' : ''}`}
              onClick={(e) => handleClick(e, id)}
            >
              <span>{label}</span>
              {activeId === id && <span className="mobile-active-dot"></span>}
            </a>
          ))}
          <a
            href="https://github.com/rajarathinam-MurugesaPandiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-github-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};
