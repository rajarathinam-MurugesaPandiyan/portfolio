import { SectionHeader } from "../SectionHeader/SectionHeader";
import { Button } from "../Button/Button";
import { FeaturedCarousel } from "./FeaturedCarousel";
import { Testimonials } from "../Testimonials/Testimonials";
import { Player } from "@lottiefiles/react-lottie-player";
import trophyAnim from "../../assets/Trophy.json";
import trophyAnimation from "../../assets/trophywon.json";
import "./Portfolio.css";

export const Portfolio = () => {
  const categories = [
    "React & Web Apps",
    "Go & Scalable Systems",
    "Flutter Apps",
    "Architecture & APIs",
    "UI/UX Craft",
    "Cloud & Deployment",
  ];
  const awards = [
    {
      title: "Top Contributor In NADA 2024 Awarded With Cash Prize",
      category: "Tekion Corp",
      author: "Hackathon & Innovation Excellence",
      date: "2024",
      bgColor: "#0A1128",
      animation: trophyAnimation,
    },
    {
      title: "Best Intern For The Month Of December",
      category: "Fibonalabs",
      author: "Multi-Stack Engineering Contribution",
      date: "Dec 2021",
      bgColor: "#1E293B",
      animation: trophyAnim,
    },
  ];

  return (
    <section className="portfolio-section" id="project">
      <div className="container">
        <div className="portfolio-header-container">
          <SectionHeader title="Featured" highlight="Engineering Projects" />
          <Button
            variant="primary"
            onClick={() =>
              window.open(
                "https://github.com/rajarathinam-MurugesaPandiyan",
                "_blank",
              )
            }
          >
            GitHub Projects
          </Button>
        </div>

        {/* Large featured project Carousel */}
        <FeaturedCarousel categories={categories} />

        {/* Colleague Testimonials */}
        <Testimonials />

        {/* Honors & Awards Section */}
        <div className="awards-header-container">
          <div className="awards-badge">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <span>Recognition</span>
          </div>
          <h3 className="awards-title">Honors & Key Achievements</h3>
          <p className="awards-subtitle">
            Milestones and acknowledgments earned across professional tenures
          </p>
        </div>

        {/* Awards grid */}
        <div className="projects-grid awards-grid">
          {awards.map((award, idx) => (
            <div className="project-card award-card" key={idx}>
              <div
                className="project-image award-image"
                style={{
                  backgroundColor: award.bgColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div style={{ width: "65%", height: "65%" }}>
                  <Player
                    autoplay
                    loop
                    src={award.animation}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className="project-meta">
                <span className="project-category">{award.category}</span>
                <div className="project-author">
                  <span>• {award.author}</span>
                  <span>• {award.date}</span>
                </div>
              </div>
              <h4 className="project-title">{award.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
