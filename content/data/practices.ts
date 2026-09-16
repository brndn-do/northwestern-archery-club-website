import { defineContent, practiceSchema, type Practice } from "@/lib/content/schema";
import { z } from "zod";

const practicesSchema = z.object({
  location: z.string().min(1),
  schedule: z.array(practiceSchema).min(1),
  freeTrial: z.string().min(1),
  capacity: z.string().min(1),
});

export const practices: {
  readonly location: string;
  readonly schedule: readonly Practice[];
  readonly freeTrial: string;
  readonly capacity: string;
} = defineContent("content/data/practices.ts", practicesSchema, {
  location: "Blomquist Recreation Center",
  schedule: [
    { day: "Friday", startTime: "8:15 PM", endTime: "9:45 PM" },
    { day: "Saturday", startTime: "7:15 PM", endTime: "8:45 PM" },
  ],
  freeTrial:
    "At the start of every quarter we run a free trial weekend — one Friday and " +
    "one Saturday practice, free for new students, with no commitment.",
  capacity:
    "Equipment and space are limited, so signups are capped and filled first come, " +
    "first served. If a practice is full, you can join the waitlist.",
});
