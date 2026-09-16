import Link from "next/link";
import type { ReactNode } from "react";
import { resolveLinkTarget, type SiteUrl } from "@/lib/content/url";

type CtaLinkProps = {
  href: SiteUrl;
  children: ReactNode;
  className?: string;
};

/**
 * Renders a {@link SiteUrl}.
 *
 * Configured targets render as links; external ones open in a new tab.
 * Placeholder targets render as non-navigating text stating what must replace
 * them.
 */
export function CtaLink({ href, children, className }: CtaLinkProps) {
  const target = resolveLinkTarget(href);

  if (target.kind === "placeholder") {
    return (
      <span
        className={`border-border text-muted inline-flex flex-col gap-1 rounded-md border border-dashed px-4 py-2 ${className ?? ""}`}
        aria-disabled="true"
      >
        <span>{children}</span>
        <span className="text-xs">Replace with {target.replaceWith}</span>
      </span>
    );
  }

  if (target.kind === "external") {
    return (
      <a href={target.href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={target.href} className={className}>
      {children}
    </Link>
  );
}
