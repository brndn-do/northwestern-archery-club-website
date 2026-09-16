import { describe, expect, it } from "vitest";
import { z } from "zod";
import { defineContent, siteUrlSchema } from "./schema";
import { placeholder, url } from "./url";

const personSchema = z.object({ name: z.string().min(1), age: z.number().int() });

describe("defineContent", () => {
  it("returns the value when it satisfies the schema", () => {
    const value = { name: "Willie", age: 20 };
    expect(defineContent("officers.ts", personSchema, value)).toEqual(value);
  });

  it("names the source file when validation fails", () => {
    expect(() => defineContent("officers.ts", personSchema, { name: "", age: 20 })).toThrow(
      /officers\.ts/,
    );
  });

  it("names the offending field when validation fails", () => {
    expect(() => defineContent("officers.ts", personSchema, { name: "Willie", age: 1.5 })).toThrow(
      /age/,
    );
  });

  it("reports every offending field at once", () => {
    const act = () => defineContent("officers.ts", personSchema, { name: "", age: 1.5 });
    expect(act).toThrow(/name/);
    expect(act).toThrow(/age/);
  });
});

describe("siteUrlSchema", () => {
  it.each([url("/join/"), placeholder("the signup form URL")])("accepts %o", (value) => {
    expect(siteUrlSchema.parse(value)).toEqual(value);
  });

  it.each(["https://example.org", { kind: "url" }, { kind: "placeholder", replaceWith: "" }])(
    "rejects %o",
    (value) => {
      expect(siteUrlSchema.safeParse(value).success).toBe(false);
    },
  );
});
