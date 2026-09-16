import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import type { SiteUrl } from "@/lib/content/url";

type ButtonLinkProps = {
  href: SiteUrl;
  children: ReactNode;
  /** Kept for API parity; this design renders every action as a text link. */
  variant?: "primary" | "secondary";
};

/** A {@link CtaLink} rendered as an underlined text link. */
export function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <CtaLink href={href} className="text-accent underline underline-offset-4">
      {children}
    </CtaLink>
  );
}
