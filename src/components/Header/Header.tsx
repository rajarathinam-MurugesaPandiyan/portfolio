import { useState, useEffect } from 'react';
import './Header.css'

export const Header = () => {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id); // Optimistically set active state
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
        <div className="logo">
          <span className="logo-icon">RR</span>
          <span className="logo-text">Rajarathinam</span>
        </div>

        <nav className="nav-right">
          {[ 'home', 'service' , 'experience', 'project', 'contact'].map((id) => (
            <a 
              key={id}
              href={`#${id}`} 
              className={`nav-link ${activeId === id ? 'active' : ''}`}
              onClick={(e) => handleClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </header>
    </div>
  )
}
