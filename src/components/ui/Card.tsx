import type { ReactNode } from "react";

/** A labelled paragraph in a stacked list. */
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-border border-t py-3 first:border-t-0">
      <h3 className="mb-1 font-semibold">{title}</h3>
      <div className="text-muted">{children}</div>
    </div>
  );
}
