import { Button } from "../Button/Button";
import { HIRE_ME_STATS, PERSONAL_INFO } from "../../constants";
import "./HireMe.css";

export const HireMe = () => {
  return (
    <section className="hire-me-section">
      <div className="container">
        <div className="hire-me-card">
          <div className="stats-group">
            {HIRE_ME_STATS.map((stat, idx) => (
              <div className="stat-item" key={idx}>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="hire-me-action">
            <Button
              variant="primary"
              className="hire-me-btn"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry`;
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
