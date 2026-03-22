import { SectionHeader } from '../SectionHeader/SectionHeader'
import { Button } from '../Button/Button'
import { FeaturedCarousel } from './FeaturedCarousel'
import { Player } from '@lottiefiles/react-lottie-player'
import trophyAnim from '../../assets/Trophy.json'
import trophyAnimation from '../../assets/trophywon.json'
import './Portfolio.css'

export const Portfolio = () => {
const categories = [
  "React & Web Apps",
  "Go & Scalable Systems",
  "Flutter Apps",
  "Architecture & APIs",
  "UI/UX Craft",
  "Cloud & Deployment"
];  
  const projects = [
    {
      title: "Best Intern For The Month Of December Contributing Various Stack",
      category: "Fibonalabs",
      author: "Individual Contribution",
      date: "",
      bgColor: "#A3A3EC",
      animation : trophyAnim
     },
    {
      title: "Top Contributor In NADA 2024 Awarded With Cash Price",
      category: "Tekion",
      author: "Individual Contribution",
      date: "",
      bgColor: "#299F6C" ,
      animation : trophyAnimation
    },
  ]

  return (
    <section className="portfolio-section" id="project">
      <div className="container">
        <div className="portfolio-header-container">
          <SectionHeader title="Lets have a look at" highlight="personal projects" />
          <Button variant="primary">See All</Button>
        </div>

        {/* Large featured project Carousel */}
        <FeaturedCarousel categories={categories} />

        {/* Project grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image" style={{ 
                backgroundColor: project.bgColor, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                position: 'relative' 
              }}>
                {/* <span className="project-arrow" style={{ position: 'absolute', top: 20, right: 20 }}>↗</span> */}
                <div style={{ width: '60%', height: '60%' }}>
                  <Player
                    autoplay
                    loop
                    src={project.animation}
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
              </div>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <div className="project-author">
                  <span>• {project.author}</span>
                  <span>• {project.date}</span>
                </div>
              </div>
              <h4 className="project-title">{project.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
