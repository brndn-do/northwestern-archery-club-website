import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  children: ReactNode;
  /** Kept for API parity; this design draws rules rather than bands. */
  surface?: boolean;
};

/** A page block separated by a rule rather than a background band. */
export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <Container className="border-border border-t py-10 sm:py-12">
        {title ? (
          <h2 className="font-display mb-6 text-2xl sm:text-3xl">
            <span className="decoration-accent underline decoration-4 underline-offset-8">
              {title}
            </span>
          </h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
