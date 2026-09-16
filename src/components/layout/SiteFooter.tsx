import { CtaLink } from "@/components/ui/CtaLink";
import { emailLink, site } from "@content/data/site";
import { socials } from "@content/data/socials";

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="font-display mb-4 text-2xl">Stay in the loop</h2>
        <ul className="mb-8 grid gap-3 sm:grid-cols-2">
          {socials.map((social) => (
            <li key={social.label}>
              <CtaLink
                href={social.href}
                className="hover:text-accent underline underline-offset-4"
              >
                {social.label}
              </CtaLink>
              <p className="text-muted text-sm">{social.detail}</p>
            </li>
          ))}
          <li>
            <CtaLink href={emailLink} className="hover:text-accent underline underline-offset-4">
              {site.email}
            </CtaLink>
            <p className="text-muted text-sm">Email the club</p>
          </li>
        </ul>
        <p className="text-muted text-sm">
          {site.name} &middot; Founded {site.founded} &middot; A student group at Northwestern
          University.
        </p>
      </div>
    </footer>
  );
}
