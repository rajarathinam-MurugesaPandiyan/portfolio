import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeSwitcher } from "./ThemeSwitcher";

describe("ThemeSwitcher Component", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("renders a single clean Dark/Light toggle button on desktop", () => {
    render(<ThemeSwitcher />);
    const toggle = screen.getByRole("button", {
      name: /switch to (light|dark) theme/i,
    });
    expect(toggle).toBeInTheDocument();
  });

  it("toggles between Dark and Light themes and updates data-theme", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    const toggle = screen.getByRole("button", {
      name: /switch to light theme/i,
    });

    await user.click(toggle);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(
      screen.getByRole("button", { name: /switch to dark theme/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /switch to dark theme/i }),
    );
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("renders Dark and Light segmented controls on mobile", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher isMobile />);

    expect(screen.getByText("Appearance")).toBeInTheDocument();
    const darkBtn = screen.getByRole("button", { name: /^dark$/i });
    const lightBtn = screen.getByRole("button", { name: /^light$/i });

    expect(darkBtn).toHaveAttribute("aria-pressed", "true");
    await user.click(lightBtn);
    expect(lightBtn).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});
