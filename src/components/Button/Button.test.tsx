import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("applies default primary variant", () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByRole("button", { name: /primary button/i });
    expect(button).toHaveClass("btn", "btn-primary");
  });

  it("applies outline variant correctly", () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole("button", { name: /outline button/i });
    expect(button).toHaveClass("btn", "btn-outline");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toHaveClass("custom-class");
  });

  it("renders arrow icon when hasArrow is true", () => {
    const { container } = render(<Button hasArrow>With Arrow</Button>);
    const svg = container.querySelector("svg.btn-arrow");
    expect(svg).toBeInTheDocument();
  });

  it("does not render arrow icon by default", () => {
    const { container } = render(<Button>No Arrow</Button>);
    const svg = container.querySelector("svg.btn-arrow");
    expect(svg).not.toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByRole("button", { name: /clickable/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
