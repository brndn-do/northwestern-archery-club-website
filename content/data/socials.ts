import { defineContent, socialLinkSchema } from "@/lib/content/schema";
import { url } from "@/lib/content/url";
import { z } from "zod";

const socialsSchema = z.object({
  instagram: socialLinkSchema,
  groupMe: socialLinkSchema,
  discord: socialLinkSchema,
  emailList: socialLinkSchema,
});

/** Social channels, listed on the site in this order. */
export const socials = defineContent("content/data/socials.ts", socialsSchema, {
  instagram: {
    label: "Instagram",
    detail: "@nu.archery",
    href: url("https://www.instagram.com/nu.archery"),
  },
  groupMe: {
    label: "GroupMe",
    detail: "Practice updates and day-of announcements",
    href: url("https://groupme.com/join_group/100190838/4ZBO1Jqq"),
  },
  discord: {
    label: "Discord",
    detail: "Chat with the club between practices",
    href: url("https://discord.gg/aRf2ZsC8rc"),
  },
  emailList: {
    label: "Email list",
    detail: "Subscribe to the club listserv",
    href: url(
      "https://listserv.it.northwestern.edu/cgi-bin/wa.exe?SUBED1=ARCHERY&X=O50F584C40B4D947398&Y",
    ),
  },
});
