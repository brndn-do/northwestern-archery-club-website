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
        "Yes! That is who the club is for. We are recreational and beginner-focused. " +
        "If it is your first time shooting, one of our instructors will teach you the basics.",
    },
    {
      category: "Getting started",
      question: "Do I have to be a Northwestern student?",
      answer:
        "You need to be Northwestern-affiliated, which includes undergraduates, graduate " +
        "students, part-time students, faculty, and staff. That also means you cannot bring " +
        "friends from outside Northwestern.",
    },
    {
      category: "Getting started",
      question: "Can I try the club before paying anything?",
      answer:
        "Yes. The first Friday and Saturday practices of each quarter are free, so you can " +
        "come and see what it is like before paying dues.",
    },
    {
      category: "Getting started",
      question: "Where do you send out announcements?",
      answer:
        "We send out announcements via our email list and GroupMe. Links to join both are at the bottom.",
    },
    {
      category: "Getting started",
      question: "Do I have to come every week?",
      answer:
        "No. There is no commitment. Plenty of people come once to try it and never come " +
        "back, and that is completely fine.",
    },
    {
      category: "Getting started",
      question: "Can I join partway through the quarter?",
      answer: "Yes. Join anytime by signing up for a practice.",
    },
    {
      category: "Getting started",
      question: "Do you compete?",
      answer:
        "Some of our exec members and more serious archers go to competitions " +
        "for fun, but nobody is required to.",
    },
    {
      category: "Getting started",
      question: "Do you have a coach?",
      answer:
        "Yes. A Level 4 USA Archery coach attends some of our practices, though not all of " +
        "them. Most of our officers are Level 2 USA Archery Instructors.",
    },
    {
      category: "Getting started",
      question: "How can I get more involved or become an officer?",
      answer:
        "We are always looking for people to help out. If you are interested in getting more " +
        "involved or becoming an officer, talk to us.",
    },
    {
      category: "Logistics",
      question: "When and where do you practice?",
      answer:
        "At Blomquist Recreation Center. Most weeks we practice Friday 8:15–9:45 PM and " +
        "Saturday 7:15–8:45 PM, but the schedule can change, and some weeks have no " +
        "practice at all. We will announce any changes ahead of time.",
    },
    {
      category: "Logistics",
      question: "Do you practice during breaks and finals?",
      answer: "No. We do not practice during Weinberg reading period, finals week, or any break.",
    },
    {
      category: "Logistics",
      question: "Do I need to sign up in advance?",
      answer:
        "Yes. Equipment and space are limited, so signups are capped and filled first come, " +
        "first served. If a practice is full you can join a waitlist.",
    },
    {
      category: "Logistics",
      question: "What if I signed up but cannot make it?",
      answer:
        "Remove yourself from the signup list or waitlist as soon as possible so someone else can take your spot.",
    },
    {
      category: "Logistics",
      question: "Can I arrive late or leave early?",
      answer:
        "Please try to arrive on time, since it makes check-in much easier for our exec " +
        "members. Leaving early is fine. However, our free practices fill up fast, so if you get a " +
        "spot for one, please try to stay for most of it. Someone else would have been " +
        "glad to have it.",
    },
    {
      category: "Logistics",
      question: "What should I wear?",
      answer:
        "Closed-toed shoes, long hair tied back, and nothing loose or baggy. " +
        "Avoid brimmed hats and large accessories. We recommend wearing a lightweight, short-sleeved T-shirt " +
        "and jeans or pants with a belt loop or pockets.",
    },
    {
      category: "Cost",
      question: "How much does it cost?",
      answer:
        "Aside from the first two practices each quarter, paid practices are $5 each, or you can pay $40 " +
        "up front for the whole quarter. We take Venmo, Zelle, and cash, collected in person during practice. " +
        "We cannot make change for cash.",
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
        "No. We provide equipment and instruction for beginners. Club equipment is barebow " +
        "recurve.",
    },
    {
      category: "Equipment",
      question: "Can I bring my own bow?",
      answer:
        "Yes. An exec member may check your equipment before you shoot, to make sure the " +
        "draw weight is not too heavy for our range (especially powerful compound bows) and " +
        "that nothing else about it is unsafe.",
    },
    {
      category: "Equipment",
      question: "I am left-handed. Do you have a bow for me?",
      answer: "Yes. We have two left-handed bows. They are the blue ones.",
    },
    {
      category: "Equipment",
      question: "Do you provide arm guards and finger tabs?",
      answer: "Yes. We have arm guards and finger tabs you can use at practice.",
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
