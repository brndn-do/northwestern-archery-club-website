import { describe, expect, it } from "vitest";
import { placeholder, resolveLinkTarget, url } from "./url";

describe("url", () => {
  it("wraps an href as a configured link", () => {
    expect(url("/join")).toEqual({ kind: "url", href: "/join" });
  });

  it.each(["", "   "])("rejects the blank href %o", (href) => {
    expect(() => url(href)).toThrow(/href/i);
  });
});

describe("placeholder", () => {
  it("wraps replacement instructions as an unconfigured link", () => {
    expect(placeholder("the signup form URL")).toEqual({
      kind: "placeholder",
      replaceWith: "the signup form URL",
    });
  });

  it.each(["", "   "])("rejects the blank instruction %o", (replaceWith) => {
    expect(() => placeholder(replaceWith)).toThrow(/replace/i);
  });
});

describe("resolveLinkTarget", () => {
  it.each([
    ["/join/", "internal"],
    ["#faq", "internal"],
    ["https://www.instagram.com/nu.archery", "external"],
    ["http://example.org", "external"],
    ["mailto:archery@u.northwestern.edu", "external"],
  ])("classifies %o as %s", (href, kind) => {
    expect(resolveLinkTarget(url(href))).toEqual({ kind, href });
  });

  it("passes placeholders through unresolved", () => {
    expect(resolveLinkTarget(placeholder("the waiver PDF"))).toEqual({
      kind: "placeholder",
      replaceWith: "the waiver PDF",
    });
  });
});
