import { CtaLink } from "@/components/ui/CtaLink";
import { emailLink, site } from "@content/data/site";
import { socials } from "@content/data/socials";

export function SiteFooter() {
  return (
    <footer className="border-border mt-12 border-t">
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
        <h2 className="label text-muted mb-3">Find us</h2>
        <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <CtaLink
                href={social.href}
                className="hover:text-accent underline underline-offset-4"
              >
                {social.label}
              </CtaLink>
            </li>
          ))}
          <li>
            <CtaLink href={emailLink} className="hover:text-accent underline underline-offset-4">
              {site.email}
            </CtaLink>
          </li>
        </ul>
        <p className="text-muted label">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
