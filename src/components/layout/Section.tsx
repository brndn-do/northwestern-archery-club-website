import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

/** A vertical page band with an optional heading. */
export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <Container className="py-8 sm:py-12">
        {title ? <h2 className="font-display mb-6 text-3xl sm:text-4xl">{title}</h2> : null}
        {children}
      </Container>
    </section>
  );
}
