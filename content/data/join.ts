import { defineContent, stepSchema, type Step } from "@/lib/content/schema";
import { z } from "zod";

const joinSchema = z.object({
  summary: z.string().min(1),
  steps: z.array(stepSchema).min(1),
  eligibility: z.object({
    affiliation: z.string().min(1),
    options: z.array(stepSchema).min(1),
  }),
  whatToWear: z.object({
    avoid: z.array(z.string().min(1)).min(1),
    recommended: z.array(z.string().min(1)).min(1),
  }),
  dayOf: z.array(z.string().min(1)).min(1),
});

export const join: {
  readonly summary: string;
  readonly steps: readonly Step[];
  readonly eligibility: { readonly affiliation: string; readonly options: readonly Step[] };
  readonly whatToWear: {
    readonly avoid: readonly string[];
    readonly recommended: readonly string[];
  };
  readonly dayOf: readonly string[];
} = defineContent("content/data/join.ts", joinSchema, {
  summary:
    "There is no application or tryout. All you have to do is sign up for a practice, " +
    "whenever you want to come.",
  steps: [
    {
      title: "Check that you can participate",
      body: "You need to be Northwestern-affiliated and meet one of the two requirements below.",
    },
    {
      title: "Sign up for a practice",
      body: "Spots are capped and first come, first served. If a practice is full, join the waitlist.",
    },
    {
      title: "Show up and check in",
      body: "Find an exec member when you arrive. First-timers get a safety overview and, if you have never shot before, a beginner lesson from one of our instructors.",
    },
    {
      title: "Pay your dues",
      body: "For any paid practices, an exec member will collect dues during practice.",
    },
  ],
  eligibility: {
    affiliation:
      "You must be Northwestern-affiliated. That includes undergraduates, graduate students, " +
      "part-time students, faculty, and staff.",
    options: [
      {
        title: "Sign a liability waiver",
        body: "Dated for that practice. This is the path for first-timers and new members. We will have copies at practice for you to sign.",
      },
      {
        title:
          "Join the archery roster on IMLeagues, and complete the Health History Questionnaire (HHQ) and wait for approval",
        body: "This is required to attend practices regularly, and must be redone every academic year.",
      },
    ],
  },
  whatToWear: {
    avoid: [
      "Loose or baggy clothing",
      "Hats with brims",
      "Large accessories, or anything you cannot easily take off",
    ],
    recommended: [
      "A lightweight, short-sleeved t-shirt",
      "Jeans or pants with belt loops or pockets",
      "Closed-toed shoes",
      "Long hair tied up",
    ],
  },
  dayOf: [
    "Check in with an exec member, signing a waiver if you need one.",
    "First time at the club? Listen to the safety rules overview.",
    "First time shooting? Learn the basics from one of our instructors.",
    "Pay dues when an exec member asks.",
    "Join our GroupMe for important updates.",
  ],
});
