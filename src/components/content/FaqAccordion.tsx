import type { FaqEntry } from "@/lib/content/schema";

/**
 * Renders FAQ entries grouped by category, in an interview-style column.
 */
export function FaqAccordion({ entries }: { entries: readonly FaqEntry[] }) {
  const categories = [...new Set(entries.map((entry) => entry.category))];

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {categories.map((category) => (
        <section key={category}>
          <h3 className="kicker text-muted border-border mb-3 border-b pb-1">{category}</h3>
          <dl>
            {entries
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <div key={entry.question} className="mb-4">
                  <dt className="font-display text-lg leading-snug">{entry.question}</dt>
                  <dd className="text-muted mt-1 text-sm leading-relaxed">{entry.answer}</dd>
                </div>
              ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
