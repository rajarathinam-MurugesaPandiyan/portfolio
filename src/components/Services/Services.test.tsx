import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Services } from "./Services";
import { SERVICES_HEADER, SERVICES_LIST } from "../../constants";

describe("Services Component", () => {
  it("renders section header with title, highlight, and subtitle", () => {
    render(<Services />);
    expect(screen.getByText(SERVICES_HEADER.title)).toBeInTheDocument();
    expect(screen.getByText(SERVICES_HEADER.highlight)).toBeInTheDocument();
    expect(screen.getByText(SERVICES_HEADER.subtitle)).toBeInTheDocument();
  });

  it("renders all services defined in constants", () => {
    render(<Services />);
    SERVICES_LIST.forEach((service) => {
      expect(
        screen.getByRole("heading", { level: 3, name: service.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });
});
