import type { ReactNode } from "react";

/** Highlights a single important fact. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border-border border p-6">
      <h3 className="border-border mb-4 border-b pb-3 font-medium">{title}</h3>
      <div className="text-muted">{children}</div>
    </aside>
  );
}
