import { Button } from '../Button/Button';
import './HireMe.css';

export const HireMe = () => {
  return (
    <section className="hire-me-section">
      <div className="container">
        <div className="hire-me-card">
          <div className="stats-group">
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">2</h3>
              <p className="stat-label">Honors & Awards</p>
            </div>
          </div>

          <div className="hire-me-action">
            <Button 
              variant="primary" 
              className="hire-me-btn" 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = 'mailto:rajamurugesan217@gmail.com?subject=Opportunity%20Inquiry';
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
