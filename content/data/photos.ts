import { defineContent, photoSchema, type Photo } from "@/lib/content/schema";
import { z } from "zod";

/** Home page photos, in display order. */
export const photos: readonly Photo[] = defineContent(
  "content/data/photos.ts",
  z.array(photoSchema).min(1),
  [
    {
      src: "/images/photos/line-of-archers.jpg",
      alt: "Two archers on the shooting line",
    },
    {
      src: "/images/photos/large-group-form-review.jpg",
      alt: "A large group of club members practicing their form together, without bows",
    },
    {
      src: "/images/photos/coaching.jpg",
      alt: "Our coach helping an archer with their form",
    },
    {
      src: "/images/photos/bullseye-closeup.jpg",
      alt: "An arrow in the center of a target",
    },
    {
      src: "/images/photos/bow-rack.jpg",
      alt: "Club bows laid out in a row",
    },
    {
      src: "/images/photos/senior-celebration.jpg",
      alt: "Club members lifting a graduating senior at a celebration with cake",
    },
    {
      src: "/images/photos/shooting-balloons.jpg",
      alt: "Balloons pinned to targets for a balloon-popping game",
    },
    {
      src: "/images/photos/halloween-shooting-pumpkins.jpg",
      alt: "A pumpkin on a target, surrounded by arrows, at a Halloween practice",
    },
    {
      src: "/images/photos/ice-skating-social.jpg",
      alt: "Club members on the ice at a skating social",
    },
  ],
);
