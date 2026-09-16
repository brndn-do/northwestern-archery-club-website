import type { ReactNode } from "react";
import { CtaLink } from "./CtaLink";
import type { SiteUrl } from "@/lib/content/url";

const styles = {
  primary: "bg-accent text-accent-contrast hover:opacity-90",
  secondary: "border border-border hover:border-accent hover:text-accent",
} as const;

type ButtonLinkProps = {
  href: SiteUrl;
  children: ReactNode;
  variant?: keyof typeof styles;
};

/** A {@link CtaLink} styled as a call-to-action button. */
export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <CtaLink
      href={href}
      className={`inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium ${styles[variant]}`}
    >
      {children}
    </CtaLink>
  );
}
