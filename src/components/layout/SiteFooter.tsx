import { CtaLink } from "@/components/ui/CtaLink";
import { emailLink, site } from "@content/data/site";
import { socials } from "@content/data/socials";

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="font-display mb-4 text-2xl">Find us</h2>
        <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-3">
          {socials.map((social) => (
            <li key={social.label}>
              <CtaLink href={social.href} className="link">
                {social.label}
              </CtaLink>
            </li>
          ))}
          <li>
            <CtaLink href={emailLink} className="link">
              {site.email}
            </CtaLink>
          </li>
        </ul>
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
