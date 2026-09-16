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
      <Container className="py-16 sm:py-24">
        <h1 className="font-display max-w-3xl text-5xl sm:text-6xl">{site.name}</h1>
        <p className="text-muted mt-4 max-w-2xl text-lg">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href={site.links.signup}>Sign up for a practice</ButtonLink>
          <ButtonLink href={url("/join")} variant="secondary">
            How to join
          </ButtonLink>
        </div>
      </Container>

      <Section surface>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-sm font-medium tracking-wide uppercase">When</dt>
            <dd className="text-muted mt-1 text-sm">
              {practices.schedule.map((practice) => (
                <span key={practice.day} className="block">
                  {practice.day} {practice.startTime}&ndash;{practice.endTime}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium tracking-wide uppercase">Where</dt>
            <dd className="text-muted mt-1 text-sm">{practices.location}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium tracking-wide uppercase">Cost</dt>
            <dd className="text-muted mt-1 text-sm">
              {dues.perPractice}, or {dues.perQuarter}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium tracking-wide uppercase">Equipment</dt>
            <dd className="text-muted mt-1 text-sm">
              Provided. Recurve barebow, plus instruction for beginners.
            </dd>
          </div>
        </dl>
      </Section>

      <Section>
        <Callout title="Try us for free">
          <p>{practices.freeTrial}</p>
        </Callout>
      </Section>

      <Section title="What to expect" surface>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card title="No experience needed">
            We are recreational and beginner-focused. Most people who show up have never shot
            before.
          </Card>
          <Card title="Certified instructors">
            Most of our officers are USA Archery-certified Instructors, and they run the beginner
            lessons.
          </Card>
          <Card title="Gear is on us">
            Club equipment is recurve barebow. Bring closed-toed shoes and nothing else.
          </Card>
        </div>
      </Section>

      <Section title="At the range">
        <PhotoGrid photos={photos} />
      </Section>

      <Section title="Common questions" surface>
        <FaqAccordion entries={previewQuestions} />
        <p className="mt-8">
          <CtaLink href={url("/faq")} className="text-accent underline underline-offset-4">
            Read all questions
          </CtaLink>
        </p>
      </Section>
    </>
  );
}
