import type { ReactNode } from "react";

/**
 * Highlights a single important fact.
 *
 * The title sits in the left margin on wide screens and stacks above the body
 * on narrow ones.
 */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-10">
      <h3 className="text-accent mb-3 text-sm leading-snug font-medium tracking-wide uppercase sm:mb-0 sm:pt-1 sm:text-right">
        {title}
      </h3>
      <div className="text-muted border-border border-l pl-6 sm:border-l-0 sm:pl-0">{children}</div>
    </aside>
  );
}
