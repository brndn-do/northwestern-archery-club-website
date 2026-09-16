import { defineContent, faqEntrySchema, type FaqEntry } from "@/lib/content/schema";
import { z } from "zod";

export const faq: readonly FaqEntry[] = defineContent(
  "content/data/faq.ts",
  z.array(faqEntrySchema).min(1),
  [
    {
      category: "Getting started",
      question: "I have never shot a bow before. Can I still come?",
      answer:
        "Yes — that is who the club is for. We are recreational and beginner-focused. " +
        "If it is your first time shooting, one of our instructors will teach you the basics.",
    },
    {
      category: "Getting started",
      question: "Do I have to be a Northwestern student?",
      answer:
        "You need to be Northwestern-affiliated, which includes undergraduates, graduate " +
        "students, part-time students, faculty, and staff.",
    },
    {
      category: "Getting started",
      question: "Can I try the club before paying anything?",
      answer:
        "Yes. The first Friday and Saturday practices of each quarter are free, so you can " +
        "come and see what it is like before paying dues.",
    },
    {
      category: "Logistics",
      question: "When and where do you practice?",
      answer:
        "Blomquist Recreation Center, twice a week: Friday 8:15–9:45 PM and " +
        "Saturday 7:15–8:45 PM.",
    },
    {
      category: "Logistics",
      question: "Do I need to sign up in advance?",
      answer:
        "Yes. Equipment and space are limited, so signups are capped and filled first come, " +
        "first served. If a practice is full you can join the waitlist.",
    },
    {
      category: "Logistics",
      question: "What should I wear?",
      answer:
        "Closed-toed shoes, hair tied back if it is long, and nothing loose or baggy. " +
        "Avoid brimmed hats and large accessories. A lightweight short-sleeved shirt and " +
        "jeans work well.",
    },
    {
      category: "Cost",
      question: "How much does it cost?",
      answer:
        "$5 per practice, or $40 up front for the whole quarter. We take Venmo, Zelle, and " +
        "cash, collected in person during practice. We cannot make change for cash.",
    },
    {
      category: "Cost",
      question: "What if the dues are a burden for me?",
      answer:
        "Please look into the Student Activities Assistance Fund, or reach out to us directly " +
        "and we will see what we can do. We do not want cost to keep anyone out.",
    },
    {
      category: "Equipment",
      question: "Do I need my own bow?",
      answer:
        "No. We provide equipment and instruction for beginners. Club equipment is recurve " +
        "barebow.",
    },
    {
      category: "Equipment",
      question: "What style of archery do you shoot?",
      answer:
        "Mostly barebow recurve — a recurve bow shot without sights or stabilizers. " +
        "It is a good style to learn on and it is what our club equipment is set up for.",
    },
  ],
);
