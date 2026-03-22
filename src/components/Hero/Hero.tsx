import { Button } from '../Button/Button'
import './Hero.css'
// @ts-ignore
import portfolioImg from '../../assets/portfolio.png'
import resumePdf from '../../assets/rajarathinam.pdf'

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        <div className="hero-left">
          <div className="hello-badge">Hello!</div>
          <h1 className="hero-title">
            I'm <span className="highlight-orange">Rajarathinam</span>,<br />
            Software Engineer
          </h1>
          
          <div className="hero-quote">
            <div className="quote-icon">"</div>
<p>Clean code and smart architecture<br/>that scaled our product effortlessly.<br/>Loved the results</p>          </div>
        </div>

        <div className="hero-center">
          <div className="hero-image-wrapper">
            <div className="orange-circle"></div>
            {/* Image provided by the user */}
            <img src={portfolioImg} alt="Rajarathinam, Software Engineer" className="hero-image" />
          </div>
          
          <div className="hero-actions">
            <Button 
              variant="primary" 
              hasArrow 
              onClick={() => window.open('https://www.youtube.com/channel/UCMuVmUfK1Hu9_zDXvOw5nYw', '_blank')}
            >
              Youtube
            </Button>
            <Button variant="outline" onClick={() => {
              const link = document.createElement('a');
              link.href = resumePdf;
              link.download = 'Rajarathinam_Resume.pdf';
              link.click();
            }}>Hire me</Button>
          </div>
        </div>

        <div className="hero-right">
          <div className="experience-badge">
            <div className="stars">
              ★★★★★
            </div>
            <div className="years">
              <span className="years-number">4.3</span>
              <span className="years-text">Years<br/>Experience</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
