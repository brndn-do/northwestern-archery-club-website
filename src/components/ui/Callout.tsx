import type { ReactNode } from "react";

/**
 * Highlights a single important fact.
 *
 * Set between rules, with the title at display size, so it reads as a break in
 * the page rather than a panel laid over it.
 */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border-text border-t-2 pt-5 pb-6">
      <h3 className="font-display mb-3 max-w-3xl text-3xl leading-tight sm:text-4xl">{title}</h3>
      <div className="text-muted border-border max-w-2xl border-b pb-6">{children}</div>
    </aside>
  );
}
