import type { Photo } from "@/lib/content/schema";

/**
 * Renders photo slots as numbered figures.
 *
 * Every slot is a labelled placeholder frame until real images are added, at
 * which point this component gains an image branch.
 */
export function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {photos.map((photo, index) => (
        <li key={photo.id}>
          <div className="border-border text-muted label flex aspect-[3/2] items-center justify-center border">
            Photo
          </div>
          <p className="text-muted mt-2 text-sm">
            <span className="label">Fig. {index + 1}</span> {photo.describes}
          </p>
        </li>
      ))}
    </ul>
  );
}
