import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Hero } from "./Hero";
import { HERO_DATA, PERSONAL_INFO } from "../../constants";

describe("Hero Component", () => {
  it("renders greeting badge, name, and role", () => {
    render(<Hero />);
    expect(screen.getByText(HERO_DATA.badge)).toBeInTheDocument();
    expect(screen.getByText(HERO_DATA.highlightName)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      HERO_DATA.role,
    );
  });

  it("renders quote text correctly", () => {
    render(<Hero />);
    HERO_DATA.quote.forEach((line) => {
      expect(screen.getByText(new RegExp(line, "i"))).toBeInTheDocument();
    });
  });

  it("renders profile image with accessible alt text", () => {
    render(<Hero />);
    const image = screen.getByRole("img", {
      name: new RegExp(PERSONAL_INFO.name, "i"),
    });
    expect(image).toBeInTheDocument();
  });

  it("renders action buttons and handles View Projects click", async () => {
    const user = userEvent.setup();
    const section = document.createElement("section");
    section.id = "project";
    document.body.appendChild(section);

    render(<Hero />);
    const viewProjectsBtn = screen.getByRole("button", {
      name: /view projects/i,
    });
    expect(viewProjectsBtn).toBeInTheDocument();

    await user.click(viewProjectsBtn);
    expect(window.scrollTo).toHaveBeenCalled();

    document.body.removeChild(section);
  });

  it("renders Download CV button and triggers download anchor", async () => {
    const user = userEvent.setup();
    const anchorClickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});

    render(<Hero />);
    const downloadBtn = screen.getByRole("button", { name: /download cv/i });
    expect(downloadBtn).toBeInTheDocument();

    await user.click(downloadBtn);
    expect(anchorClickSpy).toHaveBeenCalled();
    anchorClickSpy.mockRestore();
  });

  it("renders social media pills with valid outbound links", () => {
    render(<Hero />);
    const githubLink = screen.getByTitle("GitHub Profile");
    const linkedinLink = screen.getByTitle("LinkedIn Profile");
    const youtubeLink = screen.getByTitle("YouTube Channel");

    expect(githubLink).toHaveAttribute("href", PERSONAL_INFO.githubUrl);
    expect(linkedinLink).toHaveAttribute("href", PERSONAL_INFO.linkedinUrl);
    expect(youtubeLink).toHaveAttribute("href", PERSONAL_INFO.youtubeUrl);
  });

  it("renders experience rating and years of experience", () => {
    render(<Hero />);
    expect(screen.getByText(HERO_DATA.experienceStars)).toBeInTheDocument();
    expect(screen.getByText(HERO_DATA.experienceNumber)).toBeInTheDocument();
  });
});
