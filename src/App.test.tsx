import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Root Component", () => {
  it("renders all sections sequentially without throwing errors", () => {
    const { container } = render(<App />);

    // Header exists
    expect(container.querySelector("header.header")).toBeInTheDocument();

    // Hero section exists
    expect(container.querySelector("#home")).toBeInTheDocument();

    // Services section exists
    expect(container.querySelector("#service")).toBeInTheDocument();

    // Hire Me section exists
    expect(container.querySelector(".hire-me-section")).toBeInTheDocument();

    // Experience section exists
    expect(container.querySelector("#experience")).toBeInTheDocument();

    // Portfolio & Recognition section exists
    expect(container.querySelector("#project")).toBeInTheDocument();

    // Footer exists
    expect(container.querySelector("footer#contact")).toBeInTheDocument();

    // Key interactive elements are mounted
    expect(
      screen.getByRole("button", { name: /view projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /download cv/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get in touch/i }),
    ).toBeInTheDocument();
  });
});
