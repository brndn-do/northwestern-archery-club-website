import { z } from "zod";
import type { SiteUrl } from "./url";

/**
 * Validates a content value at module load.
 *
 * @param source - The content file being validated, used in the error message.
 * @returns The value, typed.
 * @throws If `value` does not satisfy `schema`. The message lists every
 * offending field path.
 */
export function defineContent<T>(source: string, schema: z.ZodType<T>, value: unknown): T {
  const result = schema.safeParse(value);
  if (result.success) {
    return result.data;
  }
  const issues = result.error.issues
    .map((issue) => `  ${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n");
  throw new Error(`Invalid content in ${source}:\n${issues}`);
}

/** Matches the {@link SiteUrl} union. */
export const siteUrlSchema: z.ZodType<SiteUrl> = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("url"), href: z.string().trim().min(1) }),
  z.object({ kind: z.literal("placeholder"), replaceWith: z.string().trim().min(1) }),
]);

export const socialLinkSchema = z.object({
  label: z.string().min(1),
  detail: z.string().min(1),
  href: siteUrlSchema,
});

export const practiceSchema = z.object({
  day: z.string().min(1),
  startTime: z.string().min(1),
  endTime: z.string().min(1),
});

export const factSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  detail: z.string().min(1),
});

export const stepSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export const eligibilityOptionSchema = stepSchema.extend({
  link: z.object({ label: z.string().min(1), href: siteUrlSchema }),
});

export const faqEntrySchema = z.object({
  category: z.enum(["Getting started", "Logistics", "Cost", "Equipment"]),
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const photoSchema = z.object({
  /** Site-relative path to the image, e.g. "/images/photos/coaching.jpg". */
  src: z.string().min(1),
  /** Describes the photo for people who cannot see it. */
  alt: z.string().min(1),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type Practice = z.infer<typeof practiceSchema>;
export type Fact = z.infer<typeof factSchema>;
export type Step = z.infer<typeof stepSchema>;
export type EligibilityOption = z.infer<typeof eligibilityOptionSchema>;
export type FaqEntry = z.infer<typeof faqEntrySchema>;
export type Photo = z.infer<typeof photoSchema>;
