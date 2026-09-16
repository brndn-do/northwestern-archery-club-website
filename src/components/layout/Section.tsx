import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  children: ReactNode;
  /** Kept for API parity; this design uses rules, not background bands. */
  surface?: boolean;
};

/** A page block introduced by a labelled rule. */
export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <Container className="py-8">
        {title ? (
          <h2 className="border-border text-muted label mb-5 border-t pt-2">{title}</h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
