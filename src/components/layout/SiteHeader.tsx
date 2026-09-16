import Link from "next/link";
import { site } from "@content/data/site";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-border border-b">
      <div className="mx-auto w-full max-w-2xl px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="border-border text-muted label border px-2 py-1 leading-tight"
            aria-hidden="true"
          >
            Logo
          </span>
          <span className="text-lg">{site.shortName}</span>
        </Link>
        <nav aria-label="Main" className="mt-3">
          <ul className="label text-muted flex flex-wrap gap-4">
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
