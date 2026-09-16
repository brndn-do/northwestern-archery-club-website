import type { Photo } from "@/lib/content/schema";

/**
 * Renders photo slots, the first as a lead image spanning the grid.
 *
 * Every slot is a labelled placeholder frame until real images are added, at
 * which point this component gains an image branch.
 */
export function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <ul className="grid gap-8 sm:grid-cols-3">
      {photos.map((photo, index) => (
        <li key={photo.id} className={index === 0 ? "sm:col-span-3" : undefined}>
          <div
            className={`border-border text-muted kicker flex items-center justify-center border ${
              index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
            }`}
          >
            Photograph
          </div>
          <p className="text-muted mt-2 text-sm italic">{photo.describes}</p>
        </li>
      ))}
    </ul>
  );
}
