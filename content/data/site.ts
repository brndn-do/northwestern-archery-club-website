import { defineContent, siteUrlSchema } from "@/lib/content/schema";
import { url } from "@/lib/content/url";
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
    iMLeagues: siteUrlSchema,
    studentActivitiesAssistanceFund: siteUrlSchema,
  }),
});

export const site = defineContent("content/data/site.ts", siteSchema, {
  name: "Northwestern University Archery Club",
  shortName: "NU Archery",
  tagline: "A student-run archery club at Northwestern. All experience levels welcome.",
  description:
    "A beginner-focused, recreational archery club at Northwestern University. " +
    "Equipment and instruction provided. Two practices a week at Blomquist Recreation Center.",
  founded: 2013,
  email: "archery@u.northwestern.edu",
  origin: "https://northwestern-archery.netlify.app",
  links: {
    signup: url(
      "https://docs.google.com/document/d/1s9ig-MvM_hrYpQllxU1MUBe9noAdaCYpl765OjSpNOM/edit?usp=sharing",
    ),
    waiver: url("https://drive.google.com/file/d/1ITFt-ICYkr7GVEWyb864dTsivwVHlqGb/"),
    iMLeagues: url(
      "https://docs.google.com/document/d/1nKx5UlVYWY73HNGO5rsEYa2JUEgNMpPDdmea-foUAx4/edit?usp=sharing",
    ),
    studentActivitiesAssistanceFund: url("https://www.northwestern.edu/studentorgs/saaf/"),
  },
});

/** Kept as an example of a configured link for maintainers to copy. */
export const emailLink = url(`mailto:${site.email}`);
