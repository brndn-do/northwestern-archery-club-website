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
    <header className="border-text border-b-2">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-end justify-between gap-4 px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-end gap-3">
          <span
            className="border-text text-muted border-2 border-dashed px-2 py-1 text-[10px] leading-tight"
            aria-hidden="true"
          >
            Replace with
            <br />
            club logo
          </span>
          <span className="font-display text-2xl leading-none">{site.shortName}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-4 text-sm sm:gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:decoration-accent underline decoration-2 underline-offset-4"
                >
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
