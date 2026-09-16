import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { placeholder, url } from "@/lib/content/url";
import { CtaLink } from "./CtaLink";

describe("CtaLink", () => {
  it("renders an internal target as a plain link", () => {
    render(<CtaLink href={url("/join")}>Join</CtaLink>);

    const link = screen.getByRole("link", { name: "Join" });
    expect(link).toHaveAttribute("href", "/join");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("opens an external target in a new tab without leaking the opener", () => {
    render(<CtaLink href={url("https://www.instagram.com/nu.archery")}>Instagram</CtaLink>);

    const link = screen.getByRole("link", { name: /Instagram/ });
    expect(link).toHaveAttribute("href", "https://www.instagram.com/nu.archery");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a placeholder target as a non-navigating element", () => {
    render(<CtaLink href={placeholder("the signup form URL")}>Sign up</CtaLink>);

    expect(screen.queryByRole("link")).toBeNull();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  it("states what must replace a placeholder target", () => {
    render(<CtaLink href={placeholder("the signup form URL")}>Sign up</CtaLink>);

    expect(screen.getByText(/the signup form URL/)).toBeInTheDocument();
  });

  it.each([
    ["internal", url("/join")],
    ["external", url("https://example.org")],
  ])("marks an %s external-tab hint only when it opens a new tab", (kind, href) => {
    render(<CtaLink href={href}>Go</CtaLink>);

    const hint = screen.queryByText(/opens in a new tab/i);
    expect(hint === null).toBe(kind === "internal");
  });
});

describe("CtaLink placeholder styling", () => {
  it("ignores caller styling so a placeholder never looks like a live control", () => {
    render(
      <CtaLink href={placeholder("the signup form URL")} className="bg-accent">
        Sign up
      </CtaLink>,
    );

    expect(screen.getByText("Sign up").closest("[aria-disabled]")).not.toHaveClass("bg-accent");
  });
});
