import { Button } from '../Button/Button'
import './HireMe.css'
import resumePdf from '../../assets/rajarathinam.pdf'

export const HireMe = () => {
  return (
    <section className="hire-me-section">
      <div className="container">
        <div className="hire-me-card">
          <div className="stats-group">
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Project Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">Awards</p>
            </div>
          </div>

          <div className="hire-me-action">
            <Button variant="outline" className="hire-me-btn" onClick={() => {
              const link = document.createElement('a');
              link.href = resumePdf;
              link.download = 'Rajarathinam_Resume.pdf';
              link.click();
            }}>Hire me</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
