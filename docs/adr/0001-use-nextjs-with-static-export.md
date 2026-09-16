# 1. Use Next.js with Static Export

Status: Accepted

Date: 2026-09-16

## Context

The club needs an informational website: a handful of pages describing who we
are, when we practice, what it costs, and where to find our socials. There is
no user-specific content, no authentication, no database, and no content that
changes between page loads.

The site will be maintained by club officers who turn over every year or two.
Some will be comfortable with a JavaScript toolchain; most will not. Whatever
we pick has to still be buildable by someone who inherits the repository with
no handover.

We need to decide how the site is authored and what it produces as a build
artifact.

## Options Considered

### Hand-written HTML and CSS

No build step, no dependencies, nothing to keep up to date. Any officer who
knows HTML can edit a page. Shared markup — the header, the footer, the
navigation — has to be copied into every page and kept in sync by hand.

### A static site generator with a template language (Hugo, Eleventy, Jekyll)

Purpose-built for this shape of site. Fast builds, small output, and a
templating model that is quick to learn. The template languages are specific to
each tool, so the knowledge does not transfer, and the ecosystems are smaller
than React's.

### Next.js rendered on a server

Components in React and TypeScript, with server-side rendering and image
optimization available. Requires a running Node process wherever it is hosted,
which is a live service to keep patched and paid for on a site that serves the
same bytes to everyone.

### Next.js with static export

The same React and TypeScript authoring model, but `output: "export"` emits a
directory of HTML, CSS, and JavaScript at build time. No server at runtime.
Rules out server components that read data at request time, API routes, and
built-in image optimization.

## Decision

We will build the site with Next.js using `output: "export"`.

### Reasons

- React and TypeScript are the most widely known combination among students who
  might inherit this repository, and they are what AI coding assistants handle
  most reliably — which matters for a codebase with no permanent maintainer.
- The features static export gives up are features this site has no use for.
  There is no request-time data to render and no API to expose.
- The build artifact is a plain directory of files, so the site is not tied to
  any particular host.
- TypeScript lets us enforce content invariants at build time, which is the
  main defence against a well-meaning content edit breaking a page.

## Consequences

### Positive

- The deployed site is static files, so it will be fast, cheap, and have no
  runtime attack surface.
- The site will be portable to any static host.
- Content errors will surface as build failures rather than broken pages.

### Negative

- The toolchain will be heavier than the site strictly needs, and it will
  require periodic dependency upgrades that a hand-written site would not.
- Images will have to be sized and compressed before they are committed,
  because `next/image` optimization is unavailable under static export.
- Adding genuinely dynamic behaviour later will require revisiting this
  decision rather than switching on a flag.
