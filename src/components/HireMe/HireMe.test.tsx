import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HireMe } from "./HireMe";
import { HIRE_ME_STATS } from "../../constants";

describe("HireMe Component", () => {
  it("renders all metrics and labels from HIRE_ME_STATS", () => {
    render(<HireMe />);
    HIRE_ME_STATS.forEach((stat) => {
      expect(screen.getByText(stat.number)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it('renders "Get in Touch" button and interacts correctly', async () => {
    const user = userEvent.setup();
    const contactElem = document.createElement("div");
    contactElem.id = "contact";
    document.body.appendChild(contactElem);

    render(<HireMe />);
    const button = screen.getByRole("button", { name: /get in touch/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(contactElem.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(contactElem);
  });
});
