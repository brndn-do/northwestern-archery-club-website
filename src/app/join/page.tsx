import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Callout";
import { CtaLink } from "@/components/ui/CtaLink";
import { pageMetadata } from "@/lib/metadata";
import { dues } from "@content/data/dues";
import { join } from "@content/data/join";
import { practices } from "@content/data/practices";
import { site } from "@content/data/site";
import Intro from "@content/prose/join-intro.mdx";

export const metadata = pageMetadata(
  "Join",
  "How to start shooting with Northwestern Archery Club: eligibility, signups, dues, and what to bring.",
  "/join",
);

export default function JoinPage() {
  return (
    <>
      <Container className="py-12 sm:py-16">
        <h1 className="font-display mb-6 text-4xl sm:text-5xl">Join us</h1>
        <div className="max-w-2xl">
          <Intro />
        </div>
        <div className="mt-6">
          <ButtonLink href={site.links.signup}>Sign up for a practice</ButtonLink>
        </div>
      </Container>

      <Section title="How it works">
        <ol className="grid gap-6 sm:grid-cols-2">
          {join.steps.map((step, index) => (
            <li key={step.title}>
              <h3 className="mb-1 font-medium">
                <span className="text-accent mr-2">{index + 1}.</span>
                {step.title}
              </h3>
              <p className="text-muted text-sm">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Who can participate">
        <p className="text-muted mb-6 max-w-2xl">{join.eligibility.affiliation}</p>
        <p className="mb-4 font-medium">You also need one of the following:</p>
        <ul className="grid gap-6 sm:grid-cols-2">
          {join.eligibility.options.map((option) => (
            <li key={option.title} className="border-border rounded-lg border p-5">
              <h3 className="mb-1 font-medium">{option.title}</h3>
              <p className="text-muted text-sm">{option.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <CtaLink href={site.links.waiver} className="link">
            Liability waiver
          </CtaLink>
          <CtaLink href={site.links.iMLeagues} className="link">
            IMLeagues instructions
          </CtaLink>
        </div>
      </Section>

      <Section title="Signups">
        <p className="text-muted max-w-2xl">{practices.capacity}</p>
      </Section>

      <Section title="Dues">
        <p className="mb-4 text-lg">
          {dues.perPractice}, or {dues.perQuarter}.
        </p>
        <p className="text-muted mb-4">We accept {dues.methods.join(", ")}.</p>
        <ul className="text-muted mb-8 list-disc pl-5">
          {dues.notes.map((note) => (
            <li key={note} className="mb-1">
              {note}
            </li>
          ))}
        </ul>
        <Callout title="If dues are a burden">
          <p className="mb-3">
            Please look into the Student Activities Assistance Fund (SAAF), or reach out to us and
            we will see what we can do.
          </p>
          <CtaLink href={site.links.studentActivitiesAssistanceFund} className="link text-sm">
            Student Activities Assistance Fund
          </CtaLink>
        </Callout>
      </Section>

      <Section title="On the day of practice">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-medium">Wear</h3>
            <ul className="text-muted list-disc pl-5">
              {join.whatToWear.recommended.map((item) => (
                <li key={item} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-medium">Avoid</h3>
            <ul className="text-muted list-disc pl-5">
              {join.whatToWear.avoid.map((item) => (
                <li key={item} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="mt-8 mb-3 font-medium">When you arrive</h3>
        <ol className="text-muted list-decimal pl-5">
          {join.dayOf.map((item) => (
            <li key={item} className="mb-1">
              {item}
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
