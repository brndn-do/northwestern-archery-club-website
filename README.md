# Northwestern Archery Club

The public website for Northwestern University Archery Club — a static,
informational site covering who we are, when we practise, what it costs, and
how to get in touch.

## Status

Work in progress. All five pages are built and deploy, but the site ships with
deliberate placeholders standing in for content the club has not supplied yet:

- The practice signup URL, the liability waiver, the Health History
  Questionnaire instructions, and the Student Activities Assistance Fund link
- The club logo, in the header
- All six home page photos

Placeholders render on the page as labelled frames stating what should replace
them, so nothing silently looks finished when it is not. Run
`npm run check:content` to list the unresolved links.

Not yet done: a custom domain (the site runs on a `netlify.app` subdomain), and
an Open Graph image for link previews.

## Running it locally

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
git clone https://github.com/brndn-do/northwestern-archery-club-website.git
cd northwestern-archery-club-website
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Editing content

Almost everything on the site is content, and none of it lives in the page
components. See [`content/README.md`](content/README.md) — it is written for
club officers and assumes no prior experience with this repository.

## Checks

CI runs all of these on every pull request, and a pull request cannot merge
until they pass. Run them locally before pushing:

```bash
npm run format:check   # Prettier
npm run lint           # ESLint
npm run typecheck      # TypeScript
npm test               # Vitest
npm run build          # Next.js static export, into out/
```

`npm run format` fixes formatting in place.

## Deploying

Netlify builds and deploys automatically:

- **Pull requests** get a deploy preview URL, posted as a check on the PR. Use
  it to see a content change rendered before merging.
- **The `main` branch** deploys to production on merge.

The build command is `npm run build` and the publish directory is `out/`, both
configured in [`netlify.toml`](netlify.toml). There is nothing to run by hand.

To deploy somewhere else, run `npm run build` and serve the resulting `out/`
directory as static files — the site has no server-side component.

## Repository layout

```
content/     Everything the club edits: prose (MDX) and data (TypeScript)
src/app/     Pages and routes
src/components/  Presentational components
src/lib/     Content schemas and the SiteUrl link type
docs/adr/    Architecture decision records
scripts/     Maintenance scripts
```

Architectural decisions and the reasoning behind them are in
[`docs/adr/`](docs/adr/README.md).
