import React, { useState } from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarBg: string;
  relationship: string;
  content: string;
  highlightTag: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Pradeep Kumar",
      role: "SE 2",
      company: "Tekion Corp",
      initials: "PK",
      avatarBg: "linear-gradient(135deg, #2563EB, #1D4ED8)",
      relationship: "Collaborated on Enterprise Mobile Apps",
      content:
        "Rajarathinam is an exceptionally dependable engineer. His work on our Flutter mobile applications drastically improved load times and reliability across complex modules. He combines sharp technical execution with great product intuition.",
      highlightTag: "Flutter , Dart",
    },
    {
      id: 2,
      name: "Bhaskar Mavuri",
      role: "Senior Software Engineer",
      company: "Virtusa",
      initials: "BM",
      avatarBg: "linear-gradient(135deg, #0284C7, #0369A1)",
      relationship: "Collaborated on Web Applications",
      content:
        "Working with Rajarathinam on distributed Go microservices was a seamless experience. He writes clean, idiomatic code, takes system reliability seriously, and has a knack for dissecting tricky architectural bottlenecks under pressure.",
      highlightTag: "React , Typescript",
    },
    {
      id: 3,
      name: "Sivakumar MN",
      role: "Product Engineer",
      company: "Fibonalabs",
      initials: "S",
      avatarBg: "linear-gradient(135deg, #4F46E5, #6366F1)",
      relationship: "Collaborated on UI/UX & Frontend",
      content:
        "Rajarathinam is the kind of frontend engineer designers love working with. He turns intricate Figma prototypes into pixel-perfect, responsive components effortlessly and always thinks about edge cases and user experience.",
      highlightTag: "Frontend & UI/UX",
    },
  ];

  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="testimonials-section-wrapper">
      <div className="testimonials-header">
        <div className="testimonials-badge">
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Colleague Endorsements</span>
        </div>
        <h3 className="testimonials-title">What Colleagues Say</h3>
        <p className="testimonials-subtitle">
          Endorsements from tech leads, teammates, and cross-functional
          collaborators I've built with
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`testimonial-card ${activeTab === item.id ? "active" : ""}`}
            onMouseEnter={() => setActiveTab(item.id)}
            onMouseLeave={() => setActiveTab(null)}
          >
            <div className="testimonial-card-top">
              <div className="testimonial-stars">★★★★★</div>
              <span className="testimonial-company-tag">{item.company}</span>
            </div>

            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-body">"{item.content}"</p>

            <div className="testimonial-card-bottom">
              <div
                className="testimonial-avatar"
                style={{ background: item.avatarBg }}
                aria-hidden="true"
              >
                {item.initials}
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-name-row">
                  <h4 className="testimonial-name">{item.name}</h4>
                  <span className="verified-badge" title="Verified Colleague">
                    ✓
                  </span>
                </div>
                <p className="testimonial-role">{item.role}</p>
                <p className="testimonial-relationship">{item.relationship}</p>
              </div>
            </div>

            <div className="testimonial-tag-pill">
              <span>{item.highlightTag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-cta-container">
        <a
          href="https://www.linkedin.com/in/rajarathinam-murugesapandiyan"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-endorse-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>Endorse or Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};
