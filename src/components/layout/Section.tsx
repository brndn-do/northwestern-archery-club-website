import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  children: ReactNode;
  /** Kept for API parity; this design separates with rules, not bands. */
  surface?: boolean;
};

/** A page block introduced by a kicker above a rule. */
export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <Container className="py-10">
        {title ? (
          <h2 className="border-text mb-6 border-t pt-2">
            <span className="kicker text-accent">{title}</span>
          </h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
