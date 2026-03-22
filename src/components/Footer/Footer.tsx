import { Button } from '../Button/Button'
import './Footer.css'
import resumePdf from '../../assets/rajarathinam.pdf'

export const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        
        {/* Connect Section */}
        <div className="footer-connect">
          <h2 className="connect-title">Lets Connect there</h2>
          <Button variant="outline" className="footer-hire-btn" onClick={() => {
            const link = document.createElement('a');
            link.href = resumePdf;
            link.download = 'Rajarathinam_Resume.pdf';
            link.click();
          }}>Hire me ↗</Button>
        </div>

        <div className="footer-divider"></div>

        {/* Footer Main */}
        <div className="footer-main">
          
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-icon">RR</span>
              <span className="logo-text">Rajarathinam M</span>
            </div>
            <p className="footer-desc">
              Software Engineer specializing in React, Go, and Flutter, focused on building reliable, scalable, and high-performance applications.
            </p>
            <div className="social-links">
              <span className="social-icon" onClick={() => window.open('https://www.facebook.com/profile.php?id=100069458749588', '_blank')}>fb</span>
              <span className="social-icon" onClick={() => window.open('https://www.instagram.com/life_of_rajarathinam/', '_blank')}>ig</span>
              <span className="social-icon" onClick={() => window.open('https://x.com/RajarathinamMu4', '_blank')}>tw</span>
              <span className="social-icon" onClick={() => window.open('https://www.linkedin.com/in/rajarathinam-murugesapandiyan', '_blank')}>in</span>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#project">Project</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4 className="link-title">Contact</h4>
              <ul>
                <li>+91 8610068811</li>
                <li>rajamurugesan217@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="link-title">Get the latest information</h4>
            <div className="newsletter-input-group">
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button className="newsletter-submit">➤</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>Copyright© 2026 . All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
}
