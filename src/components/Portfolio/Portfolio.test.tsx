import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Portfolio } from "./Portfolio";
import { AWARDS_DATA, PERSONAL_INFO } from "../../constants";

describe("Portfolio Component", () => {
  it("renders section header and GitHub Projects button", async () => {
    const user = userEvent.setup();
    const windowOpenSpy = vi
      .spyOn(window, "open")
      .mockImplementation(() => null);

    render(<Portfolio />);
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByText("Engineering Projects")).toBeInTheDocument();

    const githubBtn = screen.getByRole("button", { name: /github projects/i });
    expect(githubBtn).toBeInTheDocument();

    await user.click(githubBtn);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      PERSONAL_INFO.githubUrl,
      "_blank",
    );

    windowOpenSpy.mockRestore();
  });

  it("renders Honors & Key Achievements recognition section", () => {
    render(<Portfolio />);
    expect(screen.getByText("Recognition")).toBeInTheDocument();
    expect(screen.getByText("Honors & Key Achievements")).toBeInTheDocument();
  });

  it("renders all awards with titles, categories, and authors", () => {
    render(<Portfolio />);
    AWARDS_DATA.forEach((award) => {
      expect(screen.getByText(award.title)).toBeInTheDocument();
      expect(screen.getAllByText(award.category).length).toBeGreaterThanOrEqual(
        1,
      );
      expect(
        screen.getByText(new RegExp(award.author, "i")),
      ).toBeInTheDocument();
      expect(screen.getByText(`• ${award.date}`)).toBeInTheDocument();
    });

    const lottiePlayers = screen.getAllByTestId("lottie-player");
    expect(lottiePlayers.length).toBe(AWARDS_DATA.length);
  });
});
