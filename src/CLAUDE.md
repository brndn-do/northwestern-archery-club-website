# Code conventions

## Layout

- `app/` — routes. Pages read from `content/`, compose components, and export
  `metadata` built with `pageMetadata`.
- `components/layout/` — page chrome. `components/ui/` — presentational
  primitives. `components/content/` — components that render a content type.
- `lib/content/` — content schemas and the `SiteUrl` type.

## Rules

- **Components are server components.** Nothing in this site needs `"use client"`.
  If a change seems to need it, the design is wrong — say so rather than adding it.
- **No literal content in components.** Strings that the club would want to
  change belong in `content/`. Section headings and UI labels are fine inline.
- **Style with Tailwind utilities**, using the tokens in `app/globals.css`.
  Never hardcode a hex colour. Dark mode is handled by the token overrides in
  that file; individual components need no dark variants.
- **Tailwind hoists `@theme` out of at-rules.** The dark palette overrides the
  generated custom properties from a plain `:root` block. Do not nest `@theme`
  inside a media query — it silently applies everywhere.
- **Prefer native elements over JavaScript.** The FAQ uses `details`/`summary`
  rather than a disclosure widget, for correct keyboard and screen reader
  behaviour with no client code.

## Accessibility

Semantic landmarks, one `h1` per page, headings in order, visible focus rings,
and WCAG AA contrast in both themes. The accent colour differs between themes
for exactly this reason — `#4E2A84` does not pass on a dark background.

## Testing

Vitest with Testing Library. Tests sit next to the file they cover, as
`*.test.ts(x)`.

- Write the test before the implementation, in a separate pass.
- Test what our code does with a dependency's answer, not whether the
  dependency's answer is right. A test asserting Next's URL normalisation is
  testing Next.
- Assert rendered state and attributes, not just return values.
- One test per distinct code path, within a single contract. Two functions
  sharing a helper each need their own coverage.
- Where a few flags or variants interact, cover the combinations rather than
  assuming they are independent.

Worth testing: the content schemas, the `SiteUrl` type and its rendering, and
anything with branching. Not worth testing: page markup, Tailwind output,
framework behaviour.
