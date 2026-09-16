import type { ReactNode } from "react";

/** A notice pinned to the board. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pinned relative p-6">
      <span className="bg-accent text-accent-contrast font-display absolute -top-3 left-5 px-2 py-0.5 text-xs">
        Notice
      </span>
      <h3 className="font-display mt-1 mb-2 text-2xl">{title}</h3>
      <div className="text-muted">{children}</div>
    </div>
  );
}
