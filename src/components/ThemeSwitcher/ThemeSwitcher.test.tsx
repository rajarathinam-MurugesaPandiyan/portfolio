import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { THEMES } from "../../theme";

describe("ThemeSwitcher Component", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("renders trigger button with theme label", () => {
    render(<ThemeSwitcher />);
    const trigger = screen.getByRole("button", { name: /select theme palette/i });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent("Theme");
  });

  it("opens popover with all 4 themes when clicked", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    const trigger = screen.getByRole("button", { name: /select theme palette/i });

    await user.click(trigger);
    expect(screen.getByRole("dialog", { name: /theme options/i })).toBeInTheDocument();

    THEMES.forEach((theme) => {
      expect(screen.getByText(theme.name)).toBeInTheDocument();
      expect(screen.getByText(theme.tag)).toBeInTheDocument();
    });
  });

  it("changes theme and updates data-theme attribute on documentElement", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    const trigger = screen.getByRole("button", { name: /select theme palette/i });

    await user.click(trigger);

    // Select Amber Ember theme
    const amberOption = screen.getByText("Amber Ember");
    await user.click(amberOption);

    expect(document.documentElement.getAttribute("data-theme")).toBe("amber-ember");
    expect(localStorage.getItem("rr_portfolio_theme")).toBe("amber-ember");
    // Popover closes after selection
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes popover on Escape key", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    const trigger = screen.getByRole("button", { name: /select theme palette/i });

    await user.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders mobile grid layout when isMobile is true", () => {
    render(<ThemeSwitcher isMobile />);
    expect(screen.getByText("Theme Palette")).toBeInTheDocument();

    THEMES.forEach((theme) => {
      expect(screen.getByRole("button", { name: new RegExp(theme.name, "i") })).toBeInTheDocument();
    });
  });
});
