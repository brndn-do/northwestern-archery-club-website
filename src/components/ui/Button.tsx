import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import type { SiteUrl } from "@/lib/content/url";

const styles = {
  primary: "border-text border-b-2 pb-0.5",
  secondary: "border-border border-b pb-0.5",
} as const;

type ButtonLinkProps = {
  href: SiteUrl;
  children: ReactNode;
  variant?: keyof typeof styles;
};

/** A {@link CtaLink} rendered as a ruled text link. */
export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <CtaLink href={href} className={`kicker hover:text-accent inline-block ${styles[variant]}`}>
      {children}
    </CtaLink>
  );
}
