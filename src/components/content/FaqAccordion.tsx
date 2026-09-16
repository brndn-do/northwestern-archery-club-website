import type { FaqEntry } from "@/lib/content/schema";

/**
 * Renders FAQ entries grouped by category.
 *
 * Uses native disclosure elements, so expansion works without JavaScript.
 */
export function FaqAccordion({ entries }: { entries: readonly FaqEntry[] }) {
  const categories = [...new Set(entries.map((entry) => entry.category))];

  return (
    <div className="flex flex-col gap-10">
      {categories.map((category) => (
        <section key={category}>
          <h3 className="mb-3 text-sm font-medium tracking-wide uppercase">{category}</h3>
          <ul className="border-border border-t">
            {entries
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <li key={entry.question} className="border-border border-b">
                  <details className="group">
                    <summary className="hover:text-accent cursor-pointer py-3 font-medium">
                      {entry.question}
                    </summary>
                    <p className="text-muted pb-4">{entry.answer}</p>
                  </details>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
