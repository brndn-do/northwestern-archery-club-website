import { defineContent } from "@/lib/content/schema";
import { z } from "zod";

const duesSchema = z.object({
  perPractice: z.string().min(1),
  perQuarter: z.string().min(1),
  methods: z.array(z.string().min(1)).min(1),
  notes: z.array(z.string().min(1)).min(1),
});

export const dues = defineContent("content/data/dues.ts", duesSchema, {
  perPractice: "$5 per practice",
  perQuarter: "$40 for the whole quarter",
  methods: ["Venmo", "Zelle", "Cash"],
  notes: [
    "Dues are collected in person during practice by an exec member.",
    "Set up Venmo or Zelle before you arrive, or bring cash. We cannot make change.",
    "Dues pay for the equipment and instruction we provide to everyone.",
  ],
});
