import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServiceCard } from "./ServiceCard";

describe("ServiceCard Component", () => {
  it("renders title and description", () => {
    render(
      <ServiceCard
        title="Full-Stack Engineering"
        description="Scalable architecture with React and Go"
      />,
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Full-Stack Engineering",
    );
    expect(
      screen.getByText("Scalable architecture with React and Go"),
    ).toBeInTheDocument();
  });

  it("renders decorative browser mock window dots", () => {
    const { container } = render(
      <ServiceCard title="Test Service" description="Test Description" />,
    );

    expect(container.querySelector(".dot-r")).toBeInTheDocument();
    expect(container.querySelector(".dot-y")).toBeInTheDocument();
    expect(container.querySelector(".dot-g")).toBeInTheDocument();
  });
});
