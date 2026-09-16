import type { ReactNode } from "react";

/** A short column of copy under a headline. */
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-border border-t pt-3">
      <h3 className="font-display mb-1 text-xl leading-snug">{title}</h3>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  );
}
