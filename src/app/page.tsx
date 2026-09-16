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
      <Container className="pt-10 pb-2">
        <p className="label text-muted mb-3">
          Student group &middot; Northwestern &middot; est. {site.founded}
        </p>
        <h1 className="text-3xl leading-snug sm:text-4xl">{site.name}</h1>
        <p className="text-muted mt-3">{site.tagline}</p>
      </Container>

      <Section title="The practicals">
        <dl className="text-sm">
          <div className="border-border flex gap-4 border-t py-2">
            <dt className="label text-muted w-24 shrink-0 pt-0.5">Practices</dt>
            <dd>
              {practices.schedule.map((practice) => (
                <span key={practice.day} className="block">
                  {practice.day}, {practice.startTime}&ndash;{practice.endTime}
                </span>
              ))}
            </dd>
          </div>
          <div className="border-border flex gap-4 border-t py-2">
            <dt className="label text-muted w-24 shrink-0 pt-0.5">Where</dt>
            <dd>{practices.location}</dd>
          </div>
          <div className="border-border flex gap-4 border-t py-2">
            <dt className="label text-muted w-24 shrink-0 pt-0.5">Dues</dt>
            <dd>
              {dues.perPractice}, or {dues.perQuarter}
            </dd>
          </div>
          <div className="border-border flex gap-4 border-t py-2">
            <dt className="label text-muted w-24 shrink-0 pt-0.5">Equipment</dt>
            <dd>Provided. Recurve barebow, with instruction for beginners.</dd>
          </div>
          <div className="border-border flex gap-4 border-t py-2">
            <dt className="label text-muted w-24 shrink-0 pt-0.5">Signing up</dt>
            <dd>
              <ButtonLink href={site.links.signup}>Sign up for a practice</ButtonLink>
            </dd>
          </div>
        </dl>
      </Section>

      <Section>
        <Callout title="Free trial weekend">
          <p>{practices.freeTrial}</p>
        </Callout>
      </Section>

      <Section title="Before your first practice">
        <div>
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
        <p className="mt-5 text-sm">
          <CtaLink href={url("/join")} className="text-accent underline underline-offset-4">
            Full details on joining
          </CtaLink>
        </p>
      </Section>

      <Section title="Photographs">
        <PhotoGrid photos={photos} />
      </Section>

      <Section title="Questions we get a lot">
        <FaqAccordion entries={previewQuestions} />
        <p className="mt-5 text-sm">
          <CtaLink href={url("/faq")} className="text-accent underline underline-offset-4">
            Read all questions
          </CtaLink>
        </p>
      </Section>
    </>
  );
}
