import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FeaturedCarousel } from "./FeaturedCarousel";
import { PROJECT_CATEGORIES, FEATURED_SLIDES } from "../../constants";

describe("FeaturedCarousel Component", () => {
  it("renders initial slide title, subtitle, and description", () => {
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);
    const firstSlide = FEATURED_SLIDES[0];

    expect(
      screen.getByRole("heading", { level: 2, name: firstSlide.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: new RegExp(firstSlide.subtitle, "i"),
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(firstSlide.description)).toBeInTheDocument();
  });

  it("renders category filter buttons and allows selecting categories", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    const firstCatBtn = screen.getByRole("button", {
      name: PROJECT_CATEGORIES[0],
    });
    expect(firstCatBtn).toHaveClass("active");

    const secondCatBtn = screen.getByRole("button", {
      name: PROJECT_CATEGORIES[1],
    });
    await user.click(secondCatBtn);
    expect(secondCatBtn).toHaveClass("active");
    expect(firstCatBtn).not.toHaveClass("active");
  });

  it("allows clicking navigation dots to switch active slide", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    const slide2Dot = screen.getByTitle("Slide 2");
    await user.click(slide2Dot);

    const secondSlide = FEATURED_SLIDES[1];
    expect(
      screen.getByRole("heading", { level: 2, name: secondSlide.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(secondSlide.description)).toBeInTheDocument();
  });

  it("renders outbound GitHub link for active slide", () => {
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);
    const link = screen.getByRole("link", { name: /view project on github/i });
    expect(link).toHaveAttribute("href", FEATURED_SLIDES[0].githubUrl);
  });

  it("renders status badges on both the card and info section for in-progress projects", () => {
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);
    const cardStatus = screen.getByTestId("carousel-card-status");
    const infoStatus = screen.getByTestId("carousel-info-status");

    expect(cardStatus).toHaveTextContent(FEATURED_SLIDES[0].statusBadge);
    expect(cardStatus).toHaveClass("status-in-progress");
    expect(infoStatus).toHaveTextContent(FEATURED_SLIDES[0].statusBadge);
    expect(infoStatus).toHaveClass("status-in-progress");
  });

  it("renders 'Live' status badge when switching to a live project", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    // Slide 3 is "Xpense Web" which is Live
    const slide3Dot = screen.getByTitle("Slide 3");
    await user.click(slide3Dot);

    const cardStatus = screen.getByTestId("carousel-card-status");
    expect(cardStatus).toHaveTextContent("Live");
    expect(cardStatus).toHaveClass("status-live");
  });

  it("switches slides when clicking category pills", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    // Click "Go & Scalable Systems" category button
    const goCatBtn = screen.getByRole("button", {
      name: "Go & Scalable Systems",
    });
    await user.click(goCatBtn);

    // Active slide should be a Go project (e.g. Xpense Cloud Backend)
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Xpense Cloud Backend",
      }),
    ).toBeInTheDocument();
  });

  it("includes both Xpense Cloud mobile app (Flutter) and backend (Go) in slides", () => {
    const mobileApp = FEATURED_SLIDES.find((s) =>
      s.title.toLowerCase().includes("mobile"),
    );
    const backendApp = FEATURED_SLIDES.find((s) =>
      s.title.toLowerCase().includes("backend"),
    );

    expect(mobileApp).toBeDefined();
    expect(mobileApp?.tags).toContain("Flutter");
    expect(mobileApp?.statusBadge).toMatch(/revamp|in progress|under development/i);

    expect(backendApp).toBeDefined();
    expect(backendApp?.tags).toContain("Go");
    expect(backendApp?.statusBadge).toMatch(/revamp|in progress|under development/i);
  });

  it("includes Campus Desk school ERP project with Go and Frontend in slides", () => {
    const campusDesk = FEATURED_SLIDES.find((s) =>
      s.title.toLowerCase().includes("campus desk"),
    );

    expect(campusDesk).toBeDefined();
    expect(campusDesk?.tags).toContain("Go");
    expect(campusDesk?.tags).toContain("Frontend");
    expect(campusDesk?.status).toBe("Under Development");
    expect(campusDesk?.statusBadge).toBe("Under Development");
  });
});
