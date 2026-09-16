import type { ReactNode } from "react";

/** An indented aside. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border-accent border-l-2 pl-5">
      <h3 className="label text-accent mb-2">{title}</h3>
      <div className="text-muted">{children}</div>
    </aside>
  );
}
