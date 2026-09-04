import { SectionHeader } from "../SectionHeader/SectionHeader";
import { EXPERIENCES_DATA } from "../../constants";
import "./Experience.css";

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-header">
          <SectionHeader title="My Work" highlight="Experience" />
        </div>

        <div className="timeline-container">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-company-info">
                    <div className="company-logo-wrapper">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="company-logo"
                      />
                    </div>
                    <div className="timeline-title-group">
                      <h3 className="timeline-role">{exp.role}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                    </div>
                  </div>
                  <div className="timeline-date">{exp.duration}</div>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, sIdx) => (
                    <span className="skill-pill" key={sIdx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
