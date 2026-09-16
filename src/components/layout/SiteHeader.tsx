import Link from "next/link";
import { site } from "@content/data/site";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

/** A masthead: rules above and below the club name, nav beneath. */
export function SiteHeader() {
  return (
    <header className="border-text border-b">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="border-border flex items-center justify-between gap-4 border-b py-2">
          <p className="kicker text-muted">Est. {site.founded}</p>
          <p className="kicker text-muted hidden sm:block">Evanston, Illinois</p>
        </div>
        <div className="py-6 text-center">
          <Link href="/" className="inline-flex items-center gap-4">
            <span
              className="border-border text-muted rounded-full border border-dashed px-3 py-2 text-[10px] leading-tight"
              aria-hidden="true"
            >
              Club
              <br />
              logo
            </span>
            <span className="font-display text-3xl sm:text-4xl">{site.name}</span>
          </Link>
        </div>
        <nav aria-label="Main" className="border-border border-t py-2">
          <ul className="kicker flex flex-wrap justify-center gap-5 sm:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
