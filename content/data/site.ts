import { defineContent, siteUrlSchema } from "@/lib/content/schema";
import { placeholder, url } from "@/lib/content/url";
import { z } from "zod";

const siteSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  founded: z.number().int(),
  email: z.string().email(),
  /** Absolute origin the site is served from, used for canonical URLs. */
  origin: z.string().url(),
  links: z.object({
    signup: siteUrlSchema,
    waiver: siteUrlSchema,
    healthHistoryQuestionnaire: siteUrlSchema,
    studentActivitiesAssistanceFund: siteUrlSchema,
  }),
});

export const site = defineContent("content/data/site.ts", siteSchema, {
  name: "Northwestern University Archery Club",
  shortName: "NU Archery",
  tagline:
    "A student-run archery club at Northwestern. All experience levels welcome.",
  description:
    "A beginner-focused, recreational archery club at Northwestern University. " +
    "Equipment and instruction provided. Two practices a week at Blomquist Recreation Center.",
  founded: 2013,
  email: "archery@u.northwestern.edu",
  origin: "https://northwestern-archery.netlify.app",
  links: {
    signup: placeholder("the practice signup form URL (IMLeagues or Google Form)"),
    waiver: placeholder("a link to the liability waiver PDF, if one can be hosted"),
    healthHistoryQuestionnaire: placeholder(
      "the URL for Health History Questionnaire instructions",
    ),
    studentActivitiesAssistanceFund: placeholder(
      "the Northwestern Student Activities Assistance Fund (SAAF) URL",
    ),
  },
});

/** Kept as an example of a configured link for maintainers to copy. */
export const emailLink = url(`mailto:${site.email}`);
