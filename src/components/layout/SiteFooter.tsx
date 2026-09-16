import { CtaLink } from "@/components/ui/CtaLink";
import { emailLink, site } from "@content/data/site";
import { socials } from "@content/data/socials";

export function SiteFooter() {
  return (
    <footer className="border-text mt-10 border-t-4">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-center sm:px-6">
        <h2 className="kicker text-muted mb-3">Find us</h2>
        <ul className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
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
        <p className="kicker text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
