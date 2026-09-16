import type { ReactNode } from "react";

/** A pinned index card. */
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pinned p-5">
      <h3 className="font-display mb-2 text-lg">{title}</h3>
      <div className="text-muted text-sm">{children}</div>
    </div>
  );
}
