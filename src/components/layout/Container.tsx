import type { ReactNode } from "react";

/** Constrains page content to a readable width with responsive gutters. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className ?? ""}`}>{children}</div>
  );
}
