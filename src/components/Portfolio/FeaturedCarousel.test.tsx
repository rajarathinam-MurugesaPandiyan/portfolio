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
});
