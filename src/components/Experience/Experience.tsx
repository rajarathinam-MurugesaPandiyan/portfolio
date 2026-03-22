import { SectionHeader } from '../SectionHeader/SectionHeader'
import './Experience.css'

export const Experience = () => {
  const experiences = [
  {
    company: "Virtusa",
    role: "Software Engineer",
    duration: "Jun 2025 - Present",
    description: "Contributed to the design and development of scalable microservices using Go and Node.js, enhancing system reliability and performance. Collaborated with cross-functional teams and supported code quality through reviews and best practices.",
  },
  {
    company: "Calibraint",
    role: "Software Development Engineer 2",
    duration: "Feb 2025 - Apr 2025",
    description: "Engineered and optimized backend services with a focus on scalability and maintainability. Actively participated in architectural decisions and improved application performance through efficient coding practices.",
  },
  {
    company: "Tekion",
    role: "Associate Software Engineer",
    duration: "Jun 2022 -  Jan 2025",
    description: "Developed and maintained enterprise-grade web applications using React, Next.js, and Express. Implemented secure integrations with third-party services and contributed to delivering high-quality, production-ready features.",
  },
  {
    company: "Fibonalabs",
    role: "Software Development Engineer 1",
    duration: "Feb 2022 -  Jun 2022",
    description: "Built responsive and user-centric interfaces using modern React practices. Worked closely with design teams to translate Figma prototypes into pixel-perfect, high-performance web applications.",
  },
  {
    company: "Fibonalabs",
    role: "Software Development Intern",
    duration: "Nov 2021 -  Jan 2022",
    description: "Assisted in developing frontend components with React and gained hands-on experience in building responsive UI. Collaborated with senior developers to understand real-world application development workflows.",
  }
];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-header">
          <SectionHeader title="My Work" highlight="Experience" />
        </div>
        
        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.duration}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
