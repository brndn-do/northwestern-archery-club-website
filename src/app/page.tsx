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
      <Container className="py-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="kicker text-accent mb-2">Recreational &middot; Beginner-focused</p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl">{site.tagline}</h1>
            <p className="text-muted mt-4 leading-relaxed">
              We are a student group that has been shooting together since {site.founded}. Twice a
              week we put bows in the hands of whoever turns up, most of whom have never shot
              before, and teach them how to use them.
            </p>
            <p className="mt-6">
              <ButtonLink href={site.links.signup}>Sign up for a practice</ButtonLink>
            </p>
          </div>

          <aside className="border-text border-t-4 pt-3">
            <h2 className="kicker text-muted mb-3">The practicals</h2>
            <dl className="text-sm">
              <dt className="font-display text-base">Practices</dt>
              <dd className="text-muted mb-2">
                {practices.schedule.map((practice) => (
                  <span key={practice.day} className="block">
                    {practice.day}, {practice.startTime}&ndash;{practice.endTime}
                  </span>
                ))}
              </dd>
              <dt className="font-display text-base">Where</dt>
              <dd className="text-muted mb-2">{practices.location}</dd>
              <dt className="font-display text-base">Dues</dt>
              <dd className="text-muted mb-2">
                {dues.perPractice}, or {dues.perQuarter}
              </dd>
              <dt className="font-display text-base">Equipment</dt>
              <dd className="text-muted">Provided, with instruction for beginners</dd>
            </dl>
          </aside>
        </div>
      </Container>

      <Section>
        <Callout title="Come try it for a weekend">
          <p>{practices.freeTrial}</p>
        </Callout>
      </Section>

      <Section title="Before your first practice">
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
