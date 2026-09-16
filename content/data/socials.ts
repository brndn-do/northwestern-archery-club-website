import { defineContent, socialLinkSchema, type SocialLink } from "@/lib/content/schema";
import { url } from "@/lib/content/url";
import { z } from "zod";

export const socials: readonly SocialLink[] = defineContent(
  "content/data/socials.ts",
  z.array(socialLinkSchema).min(1),
  [
    {
      label: "Instagram",
      detail: "@nu.archery",
      href: url("https://www.instagram.com/nu.archery"),
    },
    {
      label: "GroupMe",
      detail: "Practice updates and day-of announcements",
      href: url("https://groupme.com/join_group/100190838/4ZBO1Jqq"),
    },
    {
      label: "Discord",
      detail: "Chat with the club between practices",
      href: url("https://discord.gg/aRf2ZsC8rc"),
    },
    {
      label: "Email list",
      detail: "Subscribe to the club listserv",
      href: url(
        "https://listserv.it.northwestern.edu/cgi-bin/wa.exe?SUBED1=ARCHERY&X=O50F584C40B4D947398&Y",
      ),
    },
  ],
);
