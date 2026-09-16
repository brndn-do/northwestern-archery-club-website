# The content layer

Everything the club edits. Pages read from here; nothing here imports from a
page. [`README.md`](README.md) is the officer-facing version of this file —
keep it accurate when the structure changes.

## Two formats, by content shape

- **`prose/*.mdx`** — paragraphs. Rendered through `mdx-components.tsx`, which
  supplies the typography. MDX files carry no frontmatter; page titles and
  metadata live in the route.
- **`data/*.ts`** — records with a repeated shape. Every export is wrapped in
  `defineContent(source, schema, value)`, which parses at module load and
  throws a message naming the file and the offending field.

The split exists because each format fails badly at the other's job. Do not
move structured records into MDX to make them easier to edit — the validation
is the point. See
[ADR 3](../docs/adr/0003-split-content-into-prose-and-typed-data.md).

## Adding or changing content

- New structured content needs a schema in `src/lib/content/schema.ts` and a
  `defineContent` call. Never export a raw object.
- Pass the real file path as `defineContent`'s first argument. It is what the
  maintainer sees when the build fails.
- Schemas should reject empty strings. A blank field that passes validation
  renders as a gap on the page, which is the silent failure this layer exists
  to prevent.

## Links

Never store a URL as a plain string. Use `url(href)` for a known URL and
`placeholder(description)` for one the club has not supplied. `CtaLink` renders
a placeholder as a labelled, non-navigating box, so an unconfigured link cannot
pass for a working one.

`placeholder` takes what a maintainer should substitute — "the practice signup
form URL (IMLeagues or Google Form)", not "TODO".

## Standing constraints

- **No academic years in copy.** The roster requirement says "every academic
  year" so it does not go stale each September.
- **Facts appear once.** Practice times render on three pages and are stored
  only in `data/practices.ts`.
- **FAQ categories are a closed enum.** Adding one is a schema change.
