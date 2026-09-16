import type { ReactNode } from "react";

/** A pull quote set off from the body copy. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border-text mx-auto max-w-2xl border-y py-6 text-center">
      <h3 className="font-display mb-2 text-2xl italic">{title}</h3>
      <div className="text-muted">{children}</div>
    </aside>
  );
}
