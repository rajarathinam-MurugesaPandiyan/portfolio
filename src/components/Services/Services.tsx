import { SectionHeader } from '../SectionHeader/SectionHeader'
import { ServiceCard } from './ServiceCard'
import './Services.css'

export const Services = () => {
  const services = [
  {
    title: "Frontend Development",
    description: "Building fast, scalable, and responsive web apps using React, Next.js, and modern UI/UX practices for seamless user experiences.",
    icon: "layout"
  },
  {
    title: "Backend Development",
    description: "Designing high-performance APIs and systems using Go, focusing on scalability, security, and efficient data handling.",
    icon: "server"
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile apps with Flutter, delivering smooth performance and native-like user experiences.",
    icon: "smartphone"
  }
]

  return (
    <section className="services-section" id="service">
      <div className="container">
        <div className="services-header-wrapper">
          <SectionHeader 
            title="My" 
            highlight="Services" 
            subtitle="Full-stack developer specializing in React, Flutter, and Go. I build scalable web and mobile apps with clean architecture, high performance, and seamless user experiences."
            theme="dark"
          />
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
