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

  it("renders Cinder UI open-source founder spotlight with live docs, GitHub, and interactive preview", async () => {
    const user = userEvent.setup();
    render(<Portfolio />);

    expect(
      screen.getByText("Founded Open-Source Project"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Cinder UI" }),
    ).toBeInTheDocument();

    const docsLink = screen.getByRole("link", { name: /explore live docs/i });
    expect(docsLink).toHaveAttribute("href", "https://cinderui.tectriad.in/");

    const copyBtn = screen.getByRole("button", {
      name: /copy install command/i,
    });
    await user.click(copyBtn);
    expect(
      screen.getByRole("button", { name: /install command copied/i }),
    ).toBeInTheDocument();

    const tokensTab = screen.getByRole("tab", { name: /css tokens/i });
    await user.click(tokensTab);
    expect(screen.getByText(/--cinder-primary/i)).toBeInTheDocument();
  });

  it("renders Tectriad co-founder spotlight with link to tectriad.in and ecosystem products", () => {
    render(<Portfolio />);

    expect(screen.getByText("Co-Founded Organization")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Tectriad" }),
    ).toBeInTheDocument();

    const tectriadLink = screen.getByRole("link", { name: /visit tectriad/i });
    expect(tectriadLink).toHaveAttribute("href", "https://tectriad.in/");
    expect(screen.getByText("Ethics Of Coding")).toBeInTheDocument();
    expect(screen.getByText("Streako")).toBeInTheDocument();
  });
});
