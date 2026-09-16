import { FaqAccordion } from "@/components/content/FaqAccordion";
import { PhotoGrid } from "@/components/content/PhotoGrid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { url } from "@/lib/content/url";
import { dues } from "@content/data/dues";
import { faq } from "@content/data/faq";
import { photos } from "@content/data/photos";
import { practices } from "@content/data/practices";
import { site } from "@content/data/site";

const previewQuestions = faq.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Container className="py-10 sm:py-14">
        <div className="pinned -rotate-1 p-6 sm:p-8">
          <p className="font-display text-accent mb-2 text-xs">
            A student group at Northwestern &middot; est. {site.founded}
          </p>
          <h1 className="font-display text-3xl leading-tight sm:text-5xl">{site.name}</h1>
          <p className="mt-4 max-w-xl">{site.tagline}</p>

          <dl className="border-border mt-6 grid gap-x-8 gap-y-3 border-t pt-5 text-sm sm:grid-cols-2">
            <div className="flex gap-2">
              <dt className="font-display shrink-0">Practices</dt>
              <dd className="text-muted">
                {practices.schedule.map((practice) => (
                  <span key={practice.day} className="block">
                    {practice.day} {practice.startTime}&ndash;{practice.endTime}
                  </span>
                ))}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-display shrink-0">Where</dt>
              <dd className="text-muted">{practices.location}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-display shrink-0">Dues</dt>
              <dd className="text-muted">
                {dues.perPractice}, or {dues.perQuarter}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-display shrink-0">Gear</dt>
              <dd className="text-muted">Provided, with instruction for beginners</dd>
            </div>
          </dl>

          <div className="mt-6">
            <ButtonLink href={site.links.signup}>Sign up for a practice</ButtonLink>
          </div>
        </div>
      </Container>

      <Section>
        <Callout title="Free trial weekend each quarter">
          <p>{practices.freeTrial}</p>
        </Callout>
      </Section>

      <Section title="Before you come">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card title="No experience needed">
            Most people at their first practice have never shot a bow. That is normal here.
          </Card>
          <Card title="We teach you">
            Most of our officers are USA Archery-certified Instructors and run the beginner lessons.
          </Card>
          <Card title="Equipment provided">
            Club bows are recurve barebow. Wear closed-toed shoes; bring nothing else.
          </Card>
        </div>
        <p className="mt-6 text-sm">
          <CtaLink href={url("/join")} className="text-accent underline underline-offset-4">
            Full details on joining
          </CtaLink>
        </p>
      </Section>

      <Section title="From the range">
        <PhotoGrid photos={photos} />
      </Section>

      <Section title="Questions we get a lot">
        <FaqAccordion entries={previewQuestions} />
        <p className="mt-6 text-sm">
          <CtaLink href={url("/faq")} className="text-accent underline underline-offset-4">
            Read all questions
          </CtaLink>
        </p>
      </Section>
    </>
  );
}
