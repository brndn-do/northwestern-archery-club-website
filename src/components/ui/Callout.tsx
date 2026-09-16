import type { ReactNode } from "react";

/** Highlights a single important fact. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-accent bg-surface rounded-lg border-l-4 p-5">
      <h3 className="font-display mb-2 text-2xl">{title}</h3>
      <div className="text-muted">{children}</div>
    </div>
  );
}
