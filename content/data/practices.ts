import { defineContent, practiceSchema, type Practice } from "@/lib/content/schema";
import { z } from "zod";

const practicesSchema = z.object({
  location: z.string().min(1),
  schedule: z.array(practiceSchema).min(1),
  freeTrial: z.string().min(1),
  signups: z.string().min(1),
});

export const practices: {
  readonly location: string;
  readonly schedule: readonly Practice[];
  readonly freeTrial: string;
  readonly signups: string;
} = defineContent("content/data/practices.ts", practicesSchema, {
  location: "Blomquist Recreation Center",
  schedule: [
    { day: "Friday", startTime: "8:15 PM", endTime: "9:45 PM" },
    { day: "Saturday", startTime: "7:15 PM", endTime: "8:45 PM" },
  ],
  freeTrial:
    "At the start of every quarter, the first Friday and Saturday practices are free. " +
    "Come to either one before deciding whether to pay dues.",
  signups:
    "We will send out detailed sign-up instructions each week. " +
    "Due to limited space and equiment, as well as safety reasons, spots are limited and filled first come, " +
    "first served. If a practice is full, you can join the waitlist.",
});
