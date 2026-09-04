import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader Component", () => {
  it("renders title and highlight correctly", () => {
    render(<SectionHeader title="Featured" highlight="Projects" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /Featured/,
    );
    expect(screen.getByText("Projects")).toHaveClass("highlight-orange");
  });

  it("renders subtitle when provided", () => {
    render(
      <SectionHeader
        title="My"
        highlight="Services"
        subtitle="Explore what I offer"
      />,
    );
    expect(screen.getByText("Explore what I offer")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    const { container } = render(
      <SectionHeader title="My Work" highlight="Experience" />,
    );
    expect(
      container.querySelector(".section-subtitle"),
    ).not.toBeInTheDocument();
  });

  it("applies default light theme", () => {
    const { container } = render(<SectionHeader title="Title" />);
    expect(container.querySelector(".section-header")).toHaveClass(
      "theme-light",
    );
  });

  it("applies dark theme when specified", () => {
    const { container } = render(<SectionHeader title="Title" theme="dark" />);
    expect(container.querySelector(".section-header")).toHaveClass(
      "theme-dark",
    );
  });
});
