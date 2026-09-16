# Northwestern Archery Club website

A static, informational site for a university club. Next.js with
`output: "export"`, Tailwind v4, deployed to Netlify. No server, no client
state, no dynamic data.

## Non-negotiables

- **The build must stay fully static.** No API routes, no request-time data, no
  runtime environment variables.
- **Content does not live in components.** It lives in `content/`. A page that
  hardcodes a practice time or a URL is a bug.
- **Unconfigured links are a distinct type, not a string.** See
  `src/lib/content/url.ts`.
- **Maintainers rotate yearly and may be non-technical.** Prefer the obvious
  approach over the clever one, and keep `content/README.md` accurate.

## Commands

```bash
npm run dev                 # local dev server
npm run build               # static export into out/
npm test                    # Vitest
npm run lint                # ESLint
npm run typecheck           # tsc --noEmit
npm run format              # Prettier, in place
npm run check:content       # list unresolved placeholders
```

CI runs format, lint, typecheck, test, and build on every pull request. Run
them locally before pushing.

## Working agreements

- Follow SOLID, DRY, YAGNI, and KISS unless there is a stated reason not to.
- Prefer a loud, immediate failure over state that is silently wrong but looks
  fine.
- Keep diffs scoped to what was asked. Flag unrelated problems rather than
  fixing them in the same change.
- Prefer explicit code over clever abstraction on a first pass.
- Break large tasks into several focused commits.
- Comments: short, and only where an implementation detail is genuinely
  tricky. Doc comments (TSDoc) state the contract — inputs, outputs, side
  effects, invariants — not design rationale. Rationale belongs in commit
  messages and ADRs.
- Commit messages: title and body wrapped at 72 characters. Title states the
  big-picture what. Body explains why, and states the problem before the fix.
  Do not restate what the diff shows. Omit the body when it adds nothing.
  Call out anything deliberately left undone.

## Directory guides

- [`src/CLAUDE.md`](src/CLAUDE.md) — code conventions and testing
- [`content/CLAUDE.md`](content/CLAUDE.md) — the content layer
- [`docs/adr/CLAUDE.md`](docs/adr/CLAUDE.md) — when and how to write an ADR

Decisions already made, with their reasoning, are in
[`docs/adr/`](docs/adr/README.md). Read the relevant record before proposing a
change to the framework, host, content model, or styling approach.
