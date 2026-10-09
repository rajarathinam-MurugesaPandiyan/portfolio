import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TechStack } from "./TechStack";
import {
  TECH_STACK_HEADER,
  TECH_STACK_ITEMS,
  TECH_STACK_HIGHLIGHTS,
} from "../../constants";

describe("TechStack Component", () => {
  it("renders section header, badge, and highlights strip", () => {
    render(<TechStack />);
    expect(screen.getByText(TECH_STACK_HEADER.badge)).toBeInTheDocument();
    expect(screen.getByText(TECH_STACK_HEADER.highlight)).toBeInTheDocument();
    expect(screen.getByText(TECH_STACK_HEADER.subtitle)).toBeInTheDocument();

    TECH_STACK_HIGHLIGHTS.forEach((hl) => {
      expect(screen.getByText(hl.label)).toBeInTheDocument();
      expect(screen.getByText(hl.value)).toBeInTheDocument();
    });
  });

  it("renders all 4 programming languages with brand images and accessible alts", () => {
    render(<TechStack />);
    const languages = ["Go (Golang)", "TypeScript", "JavaScript", "Dart"];

    languages.forEach((langName) => {
      expect(
        screen.getByRole("heading", { level: 3, name: langName }),
      ).toBeInTheDocument();
      const img = screen.getByAltText(`${langName} logo`);
      expect(img).toBeInTheDocument();
    });
  });

  it("renders key frameworks and cloud tools", () => {
    render(<TechStack />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Flutter" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "React.js" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Gin & Go Backend" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Apache Kafka" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "PostgreSQL & Databases" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Docker & Cloud" }),
    ).toBeInTheDocument();
  });

  it("filters technology cards when clicking category filter tabs", async () => {
    const user = userEvent.setup();
    render(<TechStack />);

    // Initial state: all items visible
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(
      TECH_STACK_ITEMS.length,
    );

    // Switch to "Programming Languages"
    const langTab = screen.getByRole("tab", { name: /programming languages/i });
    await user.click(langTab);

    expect(langTab).toHaveClass("active");
    expect(langTab).toHaveAttribute("aria-selected", "true");

    // Only language cards should be displayed (4 items)
    expect(
      screen.getByRole("heading", { level: 3, name: "Go (Golang)" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "TypeScript" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "JavaScript" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Dart" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3, name: "React.js" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3, name: "Docker & Cloud" }),
    ).not.toBeInTheDocument();

    // Switch to "Frameworks & UI"
    const frameworkTab = screen.getByRole("tab", { name: /frameworks & ui/i });
    await user.click(frameworkTab);

    expect(
      screen.getByRole("heading", { level: 3, name: "Flutter" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "React.js" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3, name: "Go (Golang)" }),
    ).not.toBeInTheDocument();

    // Switch back to "All Technologies"
    const allTab = screen.getByRole("tab", { name: /all technologies/i });
    await user.click(allTab);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(
      TECH_STACK_ITEMS.length,
    );
  });
});
