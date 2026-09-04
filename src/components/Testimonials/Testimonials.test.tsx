import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Testimonials } from "./Testimonials";
import { TESTIMONIALS_DATA, PERSONAL_INFO } from "../../constants";

describe("Testimonials Component", () => {
  it("renders section title and badge", () => {
    render(<Testimonials />);
    expect(screen.getByText("Colleague Endorsements")).toBeInTheDocument();
    expect(screen.getByText("What Colleagues Say")).toBeInTheDocument();
  });

  it("renders all colleague endorsements with correct details", () => {
    render(<Testimonials />);
    TESTIMONIALS_DATA.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.role)).toBeInTheDocument();
      expect(screen.getByText(item.relationship)).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(item.content, "i")),
      ).toBeInTheDocument();
      expect(screen.getByText(item.highlightTag)).toBeInTheDocument();
    });
  });

  it("renders verified badges and star ratings", () => {
    render(<Testimonials />);
    const verifiedBadges = screen.getAllByTitle("Verified Colleague");
    expect(verifiedBadges.length).toBe(TESTIMONIALS_DATA.length);

    const stars = screen.getAllByText("★★★★★");
    expect(stars.length).toBe(TESTIMONIALS_DATA.length);
  });

  it("renders LinkedIn endorsement CTA button with correct link", () => {
    render(<Testimonials />);
    const endorseBtn = screen.getByRole("link", {
      name: /endorse or connect on linkedin/i,
    });
    expect(endorseBtn).toHaveAttribute("href", PERSONAL_INFO.linkedinUrl);
    expect(endorseBtn).toHaveAttribute("target", "_blank");
  });

  it('toggles active state on mouse enter and mouse leave', async () => {
    const user = userEvent.setup();
    const { container } = render(<Testimonials />);
    const card = container.querySelector('.testimonial-card')!;

    await user.hover(card);
    expect(card).toHaveClass('active');

    await user.unhover(card);
    expect(card).not.toHaveClass('active');
  });
});
