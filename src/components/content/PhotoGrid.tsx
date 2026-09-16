import type { Photo } from "@/lib/content/schema";

/**
 * Renders photo slots.
 *
 * Every slot is a labelled placeholder frame until real images are added, at
 * which point this component gains an image branch.
 */
export function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <li
          key={photo.id}
          className="border-border text-muted flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed p-4 text-center text-sm"
        >
          Replace with a photo: {photo.describes}
        </li>
      ))}
    </ul>
  );
}
