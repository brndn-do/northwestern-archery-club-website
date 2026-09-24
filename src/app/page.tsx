import { FaqAccordion } from "@/components/content/FaqAccordion";
import { PhotoGrid } from "@/components/content/PhotoGrid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Callout } from "@/components/ui/Callout";
import { CtaLink } from "@/components/ui/CtaLink";
import { url } from "@/lib/content/url";
import { dues } from "@content/data/dues";
import { faq } from "@content/data/faq";
import { join } from "@content/data/join";
import { photos } from "@content/data/photos";
import { practices } from "@content/data/practices";
import { site } from "@content/data/site";

const previewQuestions = faq.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Container className="pt-12 pb-8 sm:pt-24">
        <h1 className="font-display max-w-3xl text-5xl sm:text-6xl">{site.name}</h1>
        <p className="text-muted mt-4 max-w-2xl text-lg">{site.tagline}</p>
      </Container>

      <Section>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-lg font-medium tracking-wide">When</dt>
            <dd className="text-muted mt-1 text-sm">
              {practices.schedule.map((practice) => (
                <span key={practice.day} className="block">
                  {practice.day} {practice.startTime}&ndash;{practice.endTime}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium tracking-wide">Where</dt>
            <dd className="text-muted mt-1 text-sm">{practices.location}</dd>
          </div>
          <div>
            <dt className="text-lg font-medium tracking-wide">Cost</dt>
            <dd className="text-muted mt-1 text-sm">
              {dues.perPractice}, or {dues.perQuarter}, except for our quarterly free practices.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium tracking-wide">Equipment</dt>
            <dd className="text-muted mt-1 text-sm">
              Provided. Recurve barebow, plus instruction for beginners.
            </dd>
          </div>
        </dl>
      </Section>

      <Section>
        <Callout title="Free practices">
          <p>{practices.freeTrial}</p>
        </Callout>
      </Section>

      <Section title="How to join">
        <p className="text-muted mb-6 max-w-2xl">{join.summary}</p>
        <p className="mt-8">
          <CtaLink href={url("/join")} className="link">
            More info
          </CtaLink>
        </p>
      </Section>

      <Section title="Photos">
        <PhotoGrid photos={photos} />
      </Section>

      <Section title="Frequently asked questions">
        <FaqAccordion entries={previewQuestions} />
        <p className="mt-8">
          <CtaLink href={url("/faq")} className="link">
            Read all questions
          </CtaLink>
        </p>
      </Section>
    </>
  );
}
