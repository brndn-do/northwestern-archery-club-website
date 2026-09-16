import type { ReactNode } from "react";

/** Constrains page content to a single readable column. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-2xl px-4 sm:px-6 ${className ?? ""}`}>{children}</div>
  );
}
