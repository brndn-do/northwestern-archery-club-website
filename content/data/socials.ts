import { defineContent, socialLinkSchema } from "@/lib/content/schema";
import { url } from "@/lib/content/url";
import { z } from "zod";

const socialsSchema = z.object({
  emailList: socialLinkSchema,
  groupMe: socialLinkSchema,
  instagram: socialLinkSchema,
  discord: socialLinkSchema,
});

/** Social channels, listed on the site in this order. */
export const socials = defineContent("content/data/socials.ts", socialsSchema, {
  emailList: {
    label: "Email list",
    detail: "Subscribe to the club's LISTSERV",
    href: url(
      "https://listserv.it.northwestern.edu/cgi-bin/wa.exe?SUBED1=ARCHERY&X=O50F584C40B4D947398&Y",
    ),
  },
  groupMe: {
    label: "GroupMe",
    detail: "Join our GroupMe chat",
    href: url("https://groupme.com/join_group/100190838/4ZBO1Jqq"),
  },
  instagram: {
    label: "Instagram",
    detail: "Follow us: @nu.archery",
    href: url("https://www.instagram.com/nu.archery"),
  },
  discord: {
    label: "Discord",
    detail: "It's like Slack but better",
    href: url("https://discord.gg/aRf2ZsC8rc"),
  },
});
