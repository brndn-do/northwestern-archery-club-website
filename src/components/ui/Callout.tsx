import type { ReactNode } from "react";

/**
 * Highlights a single important fact.
 *
 * The title straddles the top border, so it needs the page background behind
 * it: place this on the base background, not inside a surface band.
 */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border-border relative border px-6 pt-7 pb-6">
      <h3 className="bg-bg text-accent absolute -top-2 left-5 px-2 text-xs font-medium tracking-[0.12em] uppercase">
        {title}
      </h3>
      <div className="text-muted">{children}</div>
    </aside>
  );
}
