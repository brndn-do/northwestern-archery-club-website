# 2. Host on Netlify

Status: Accepted

Date: 2026-09-16

## Context

The site produces a directory of static files (see
[ADR 1](0001-use-nextjs-with-static-export.md)) that needs to be served on the
public internet, ideally under a custom domain once the club buys one.

Officers graduate. Whatever account owns the deployment will eventually belong
to someone who has left the university and stopped reading their email. A
hosting arrangement that depends on one person's personal account is a site
that goes dark at an unpredictable point in the future.

The club has no hosting budget.

We need to decide where the site is deployed from and who controls that
deployment.

## Options Considered

### GitHub Pages

Free, and tied to the repository rather than to a separate account, so control
transfers with the repository itself. Supports custom domains. Deploy previews
for pull requests are not built in and have to be assembled from Actions.

### Vercel

The reference host for Next.js, with the best deploy previews and the least
configuration. The free tier is a personal account, and moving a project
between accounts requires the original owner to act.

### Netlify

Free tier comparable to Vercel's, with deploy previews per pull request and
custom domain support. Supports team-owned sites, so ownership can be
transferred between officers without the outgoing officer's cooperation.

### University-provided hosting

Owned by the institution rather than by any individual, so it outlasts every
officer. Typically means manual uploads, no deploy previews, and a request
process for changes.

## Decision

We will deploy the site to Netlify from the repository's default branch, with
deploy previews on pull requests.

### Reasons

- Team ownership means the account can outlive the officer who created it,
  which is the specific failure mode we are trying to avoid.
- Deploy previews let an officer see a content change rendered before it is
  merged, without installing anything locally. This is the single feature most
  likely to keep non-technical officers editing content at all.
- The build output is static, so if Netlify's terms change the site can be
  moved to any other host by copying a directory.

## Consequences

### Positive

- Every pull request will produce a reviewable URL.
- Deployment will require no manual steps after the initial setup.
- Handover between officers will be an account permission change rather than a
  migration.

### Negative

- The club will depend on a commercial free tier that could change.
- Someone must remember to transfer Netlify team access during officer
  turnover; the repository alone will not be enough.
