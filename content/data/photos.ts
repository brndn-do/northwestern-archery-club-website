import { defineContent, photoSchema, type Photo } from "@/lib/content/schema";
import { z } from "zod";

/**
 * Home page photo slots. Every entry renders as a labelled placeholder frame
 * until a real image is added.
 */
export const photos: readonly Photo[] = defineContent(
  "content/data/photos.ts",
  z.array(photoSchema).min(1),
  [
    { id: "line", describes: "A line of archers shooting at Blomquist Recreation Center" },
    { id: "beginner", describes: "An instructor coaching a first-time archer" },
    { id: "equipment", describes: "Club recurve barebows on the equipment rack" },
    { id: "target", describes: "A close-up of arrows grouped in a target face" },
    { id: "group", describes: "A group photo of club members after practice" },
    { id: "draw", describes: "An archer at full draw, seen from behind the line" },
  ],
);
