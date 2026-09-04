import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "./Footer";
import { PERSONAL_INFO, FOOTER_DATA } from "../../constants";

describe("Footer Component", () => {
  it("renders Connect heading and Email Me button", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { level: 2, name: FOOTER_DATA.connectTitle }),
    ).toBeInTheDocument();
    expect(screen.getByText(FOOTER_DATA.connectSubtitle)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /email me/i }),
    ).toBeInTheDocument();
  });

  it("handles Email Me button click", async () => {
    const user = userEvent.setup();
    render(<Footer />);
    const emailBtn = screen.getByRole("button", { name: /email me/i });
    await user.click(emailBtn);
  });

  it("renders brand identity and description", () => {
    render(<Footer />);
    expect(screen.getByText(PERSONAL_INFO.fullName)).toBeInTheDocument();
    expect(screen.getByText(FOOTER_DATA.brandDesc)).toBeInTheDocument();
  });

  it("renders all social media links", () => {
    render(<Footer />);
    expect(screen.getByTitle("GitHub")).toHaveAttribute(
      "href",
      PERSONAL_INFO.githubUrl,
    );
    expect(screen.getByTitle("LinkedIn")).toHaveAttribute(
      "href",
      PERSONAL_INFO.linkedinUrl,
    );
    expect(screen.getByTitle("YouTube")).toHaveAttribute(
      "href",
      PERSONAL_INFO.youtubeUrl,
    );
    expect(screen.getByTitle("Twitter / X")).toHaveAttribute(
      "href",
      PERSONAL_INFO.twitterUrl,
    );
  });

  it("renders direct contact info (email, phone, location)", () => {
    render(<Footer />);
    expect(screen.getByText(PERSONAL_INFO.email)).toHaveAttribute(
      "href",
      `mailto:${PERSONAL_INFO.email}`,
    );
    expect(screen.getByText(PERSONAL_INFO.phone)).toBeInTheDocument();
    expect(screen.getByText(PERSONAL_INFO.location)).toBeInTheDocument();
  });

  it("handles quick message input typing and submit", async () => {
    const user = userEvent.setup();
    render(<Footer />);

    const input = screen.getByPlaceholderText(FOOTER_DATA.quickMsgPlaceholder);
    await user.type(input, "Hello Rajarathinam, let us collaborate!");
    expect(input).toHaveValue("Hello Rajarathinam, let us collaborate!");

    const submitBtn = screen.getByRole("button", { name: /send email/i });
    expect(submitBtn).toBeInTheDocument();
    // Submitting triggers form handler without crashing
    await user.click(submitBtn);
  });

  it("renders copyright with full name and current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`© ${year} ${PERSONAL_INFO.fullName}`, "i")),
    ).toBeInTheDocument();
  });
});
