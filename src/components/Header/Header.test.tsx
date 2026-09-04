import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";
import { NAV_ITEMS, PERSONAL_INFO } from "../../constants";

describe("Header Component", () => {
  it("renders logo and brand name", () => {
    render(<Header />);
    expect(screen.getByText("RR")).toBeInTheDocument();
    expect(screen.getByText("Rajarathinam")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<Header />);
    NAV_ITEMS.forEach((item) => {
      // Both desktop and mobile nav have links
      const links = screen.getAllByRole("link", {
        name: new RegExp(item.label, "i"),
      });
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders GitHub button with correct external link", () => {
    render(<Header />);
    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    expect(githubLinks[0]).toHaveAttribute("href", PERSONAL_INFO.githubUrl);
    expect(githubLinks[0]).toHaveAttribute("target", "_blank");
  });

  it("toggles mobile drawer menu when hamburger button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    const mobileMenu = container.querySelector(".mobile-nav-menu");

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).not.toHaveClass("open");

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(mobileMenu).toHaveClass("open");

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileMenu).not.toHaveClass("open");
  });

  it("handles navigation link click smoothly", async () => {
    const user = userEvent.setup();

    // Create a mock section element in the DOM
    const section = document.createElement("section");
    section.id = "project";
    document.body.appendChild(section);

    render(<Header />);
    const projectLinks = screen.getAllByRole("link", { name: /^projects$/i });
    await user.click(projectLinks[0]);

    expect(window.scrollTo).toHaveBeenCalled();
    document.body.removeChild(section);
  });
});
