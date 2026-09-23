import Link from "next/link";
import { site } from "@content/data/site";
import Image from "next/image";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-border border-b">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            width={36}
            height={36}
            alt="Logo"
            className="rounded-full"
          />
          <span className="font-display text-xl">{site.shortName}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-4 text-sm sm:gap-6">
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
