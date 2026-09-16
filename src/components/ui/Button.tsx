import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import type { SiteUrl } from "@/lib/content/url";

const styles = {
  primary: "bg-accent text-accent-contrast",
  secondary: "border-2 border-text",
} as const;

type ButtonLinkProps = {
  href: SiteUrl;
  children: ReactNode;
  variant?: keyof typeof styles;
};

/** A {@link CtaLink} styled as a stamped label. */
export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <CtaLink
      href={href}
      className={`font-display inline-flex items-center px-5 py-2 text-sm ${styles[variant]}`}
    >
      {children}
    </CtaLink>
  );
}
