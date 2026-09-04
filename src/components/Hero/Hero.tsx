import { Button } from "../Button/Button";
import { HERO_DATA, PERSONAL_INFO, ASSETS } from "../../constants";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-left">
          <div className="hello-badge">{HERO_DATA.badge}</div>
          <h1 className="hero-title">
            {HERO_DATA.titlePrefix}{" "}
            <span className="highlight-orange">{HERO_DATA.highlightName}</span>,
            <br />
            {HERO_DATA.role}
          </h1>

          <div className="hero-quote">
            <div className="quote-icon">"</div>
            <p>
              {HERO_DATA.quote.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < HERO_DATA.quote.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="hero-center">
          <div className="hero-image-wrapper">
            <div className="orange-circle"></div>
            <img
              src={ASSETS.portfolioImg}
              alt={`${PERSONAL_INFO.name}, ${PERSONAL_INFO.role}`}
              className="hero-image"
            />
          </div>

          <div className="hero-actions">
            <Button
              variant="primary"
              className="hero-primary-btn"
              onClick={() => {
                const element = document.getElementById("project");
                if (element) {
                  const offset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.scrollY - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              <span className="btn-status-dot"></span>
              <span>View Projects</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const link = document.createElement("a");
                link.href = ASSETS.resumePdf;
                link.download = PERSONAL_INFO.resumeDownloadName;
                link.click();
              }}
            >
              Download CV
            </Button>
          </div>

          <div className="hero-social-pills">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              title="GitHub Profile"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              title="LinkedIn Profile"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill"
              title="YouTube Channel"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="experience-badge">
            <div className="stars">{HERO_DATA.experienceStars}</div>
            <div className="years">
              <span className="years-number">{HERO_DATA.experienceNumber}</span>
              <span className="years-text">
                Years
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
