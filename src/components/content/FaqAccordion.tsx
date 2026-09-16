import type { FaqEntry } from "@/lib/content/schema";

/**
 * Renders FAQ entries grouped by category as a plain question-and-answer list.
 */
export function FaqAccordion({ entries }: { entries: readonly FaqEntry[] }) {
  const categories = [...new Set(entries.map((entry) => entry.category))];

  return (
    <div className="flex flex-col gap-8">
      {categories.map((category) => (
        <section key={category}>
          <h3 className="label text-muted mb-3">{category}</h3>
          <dl>
            {entries
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <div key={entry.question} className="border-border border-t py-3">
                  <dt className="font-semibold">{entry.question}</dt>
                  <dd className="text-muted mt-1">{entry.answer}</dd>
                </div>
              ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
