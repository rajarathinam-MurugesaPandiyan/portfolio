import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Experience } from "./Experience";
import { EXPERIENCES_DATA } from "../../constants";

describe("Experience Component", () => {
  it("renders section title and header", () => {
    render(<Experience />);
    expect(screen.getByText("My Work")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders all companies and timeline items", () => {
    render(<Experience />);
    EXPERIENCES_DATA.forEach((exp) => {
      expect(screen.getAllByText(exp.company).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(exp.role).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(exp.duration)).toBeInTheDocument();
      expect(screen.getByText(exp.description)).toBeInTheDocument();
    });
  });

  it("renders skill pills for each experience", () => {
    render(<Experience />);
    // Verify a sample of distinctive skills across the tenures
    expect(screen.getAllByText("OAuth 2.0").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("BIP-39").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Apache Kafka").length).toBeGreaterThanOrEqual(
      1,
    );
    expect(screen.getAllByText("3EV Mobility").length).toBeGreaterThanOrEqual(
      1,
    );
  });

  it("renders company logos with accessible alt text", () => {
    render(<Experience />);
    EXPERIENCES_DATA.forEach((exp) => {
      const logos = screen.getAllByRole("img", {
        name: new RegExp(`${exp.company} logo`, "i"),
      });
      expect(logos.length).toBeGreaterThanOrEqual(1);
    });
  });
});
