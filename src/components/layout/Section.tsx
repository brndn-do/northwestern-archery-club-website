import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  children: ReactNode;
  /** Applies the alternate surface background. */
  surface?: boolean;
};

/** A vertical page band with an optional heading. */
export function Section({ title, children, surface = false }: SectionProps) {
  return (
    <section className={surface ? "bg-surface" : undefined}>
      <Container className="py-12 sm:py-16">
        {title ? <h2 className="font-display mb-6 text-3xl sm:text-4xl">{title}</h2> : null}
        {children}
      </Container>
    </section>
  );
}
