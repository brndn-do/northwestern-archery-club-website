import type { Photo } from "@/lib/content/schema";

const tilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0", "-rotate-1"] as const;

/**
 * Renders photo slots as snapshots pinned to the board.
 *
 * Every slot is a labelled placeholder frame until real images are added, at
 * which point this component gains an image branch.
 */
export function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <li key={photo.id} className={tilts[index % tilts.length]}>
          <div className="pinned p-2 pb-5">
            <div className="border-border text-muted flex aspect-[4/3] items-center justify-center border border-dashed p-3 text-center text-xs">
              Replace with a photo
            </div>
            <p className="text-muted mt-3 px-1 text-xs">{photo.describes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
