import Image from "next/image";
import type { Photo } from "@/lib/content/schema";

/** Renders photos in a grid, each cropped to fill a 4:3 frame. */
export function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <li key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
