import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CtaLink } from "@/components/ui/CtaLink";
import { pageMetadata } from "@/lib/metadata";
import { emailLink, site } from "@content/data/site";
import { socials } from "@content/data/socials";

export const metadata = pageMetadata(
  "Contact",
  "How to reach Northwestern Archery Club by email, Instagram, GroupMe, or Discord.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <Container className="py-12 sm:py-16">
        <h1 className="font-display mb-6 text-4xl sm:text-5xl">Contact us</h1>
        <p className="text-muted mb-6 max-w-2xl">
          If the FAQ does not answer your question, contact us. We also read GroupMe, Instagram and
          Discord messages.
        </p>
        <p className="text-lg">
          <CtaLink href={emailLink} className="link">
            {site.email}
          </CtaLink>
        </p>
      </Container>

      <Section title="Find us online">
        <ul className="grid gap-4 sm:grid-cols-2">
          {Object.values(socials).map((social) => (
            <li key={social.label} className="border-border rounded-lg border p-5">
              <h3 className="mb-1 font-medium">
                <CtaLink href={social.href} className="link">
                  {social.label}
                </CtaLink>
              </h3>
              <p className="text-muted text-sm">{social.detail}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
