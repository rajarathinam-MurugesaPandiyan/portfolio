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

    const goCatBtn = screen.getByRole("button", {
      name: "Go & Scalable Systems",
    });
    await user.click(goCatBtn);
    expect(goCatBtn).toHaveClass("active");
    expect(firstCatBtn).not.toHaveClass("active");
  });

  it("allows clicking navigation dot buttons to switch active slide", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    const slide2Dot = screen.getByRole("button", { name: /go to slide 2/i });
    await user.click(slide2Dot);

    const secondSlide = FEATURED_SLIDES[1];
    expect(
      screen.getByRole("heading", { level: 2, name: secondSlide.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(secondSlide.description)).toBeInTheDocument();
    expect(slide2Dot).toHaveAttribute("aria-current", "true");
  });

  it("supports previous, next, and pause/resume auto-rotation controls", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    const nextBtn = screen.getByRole("button", { name: /next slide/i });
    const prevBtn = screen.getByRole("button", { name: /previous slide/i });
    const pauseBtn = screen.getByRole("button", {
      name: /pause auto-rotation/i,
    });

    await user.click(nextBtn);
    expect(
      screen.getByRole("heading", { level: 2, name: FEATURED_SLIDES[1].title }),
    ).toBeInTheDocument();

    await user.click(prevBtn);
    expect(
      screen.getByRole("heading", { level: 2, name: FEATURED_SLIDES[0].title }),
    ).toBeInTheDocument();

    await user.click(pauseBtn);
    expect(
      screen.getByRole("button", { name: /resume auto-rotation/i }),
    ).toBeInTheDocument();
  });

  it("renders outbound GitHub, Live Site, and npm links for Cinder UI slide", () => {
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);
    const githubLink = screen.getByRole("link", {
      name: /view project on github/i,
    });
    expect(githubLink).toHaveAttribute("href", FEATURED_SLIDES[0].githubUrl);

    const liveLink = screen.getByRole("link", { name: /visit live site/i });
    expect(liveLink).toHaveAttribute("href", "https://cinderui.tectriad.in/");

    const npmLink = screen.getByRole("link", { name: /view package on npm/i });
    expect(npmLink).toHaveAttribute(
      "href",
      "https://www.npmjs.com/package/@tec-triad/cinder-ui",
    );
  });

  it("renders 'Live' status badge for Cinder UI and 'In Progress' when switching to Xpense Cloud Mobile", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    const cardStatus = screen.getByTestId("carousel-card-status");
    const infoStatus = screen.getByTestId("carousel-info-status");
    expect(cardStatus).toHaveTextContent(FEATURED_SLIDES[0].statusBadge);
    expect(cardStatus).toHaveClass("status-live");
    expect(infoStatus).toHaveClass("status-live");

    const slide2Dot = screen.getByTitle("Slide 2");
    await user.click(slide2Dot);

    expect(cardStatus).toHaveTextContent(FEATURED_SLIDES[1].statusBadge);
    expect(cardStatus).toHaveClass("status-in-progress");
  });

  it("switches slides when clicking category pills", async () => {
    const user = userEvent.setup();
    render(<FeaturedCarousel categories={PROJECT_CATEGORIES} />);

    const goCatBtn = screen.getByRole("button", {
      name: "Go & Scalable Systems",
    });
    await user.click(goCatBtn);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Xpense Cloud Backend",
      }),
    ).toBeInTheDocument();
  });

  it("includes Cinder UI, Xpense Cloud mobile & backend, and Campus Desk in slides", () => {
    const cinderUi = FEATURED_SLIDES.find((s) => s.title === "Cinder UI");
    const mobileApp = FEATURED_SLIDES.find((s) =>
      s.title.toLowerCase().includes("mobile"),
    );
    const backendApp = FEATURED_SLIDES.find((s) =>
      s.title.toLowerCase().includes("backend"),
    );
    const campusDesk = FEATURED_SLIDES.find((s) =>
      s.title.toLowerCase().includes("campus desk"),
    );

    expect(cinderUi).toBeDefined();
    expect(cinderUi?.liveUrl).toBe("https://cinderui.tectriad.in/");
    expect(cinderUi?.githubUrl).toBe("https://github.com/Tectriad/cinder");
    expect(cinderUi?.status).toBe("Live");

    expect(mobileApp).toBeDefined();
    expect(mobileApp?.tags).toContain("Flutter");

    expect(backendApp).toBeDefined();
    expect(backendApp?.tags).toContain("Go");

    expect(campusDesk).toBeDefined();
    expect(campusDesk?.tags).toContain("Go");
    expect(campusDesk?.tags).toContain("Frontend");
  });
});
