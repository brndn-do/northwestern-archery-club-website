import type { ReactNode } from "react";

/** A bordered content block with a heading. */
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-border rounded-lg border p-5">
      <h3 className="mb-2 font-medium">{title}</h3>
      <div className="text-muted text-sm">{children}</div>
    </div>
  );
}
