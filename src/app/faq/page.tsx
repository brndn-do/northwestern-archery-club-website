import { FaqAccordion } from "@/components/content/FaqAccordion";
import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/metadata";
import { faq } from "@content/data/faq";

export const metadata = pageMetadata(
  "FAQ",
  "Common questions about shooting with Northwestern Archery Club: experience, cost, equipment, and logistics.",
  "/faq",
);

export default function FaqPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="font-display mb-8 text-4xl sm:text-5xl">Common questions</h1>
      <div className="max-w-3xl">
        <FaqAccordion entries={faq} />
      </div>
    </Container>
  );
}
