import { CtaLink } from "@/components/ui/CtaLink";
import { emailLink, site } from "@content/data/site";
import { socials } from "@content/data/socials";

export function SiteFooter() {
  return (
    <footer className="border-text mt-8 border-t-2">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="font-display mb-4 text-xl">Find us</h2>
        <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
        <p className="text-muted text-xs">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
