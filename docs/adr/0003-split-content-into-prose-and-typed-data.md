# 3. Split Content into Prose and Typed Data

Status: Accepted

Date: 2026-09-16

## Context

Almost everything on this site is content the club will need to change:
practice times, dues, eligibility rules, FAQ answers, social links, and the
prose describing who we are. The people making those changes are officers, not
developers, and most of them will edit files through the GitHub web interface
without ever running the site locally.

That last point sets the constraint. An officer who mistypes something will not
see the result until it is deployed, unless the mistake stops the build.

The content itself is not uniform. Some of it is prose — paragraphs with the
occasional link or emphasis. Some of it is structured records: a list of FAQ
entries each with a category, a question, and an answer.

We need to decide how content is stored and how errors in it are caught.

## Options Considered

### Content inline in the page components

Nothing to learn beyond JSX, and the content sits next to the markup that
renders it. Editing a paragraph means editing a React component, and a stray
character can break the build in a way whose error message points at the
framework rather than at the content.

### All content as Markdown or MDX files

The friendliest editing surface, and the closest thing to a document an officer
will recognise. Structured records have to be encoded as heading and list
conventions, which are not enforced: an extra `###` produces a silently
malformed entry rather than an error.

### All content as typed TypeScript data files

Every piece of content gets a schema, so malformed content fails the build with
a message naming the field. Prose becomes string literals with escaped quotes
and explicit paragraph breaks, which is unpleasant to write and worse to edit.

### Prose as MDX, structured content as typed data

Prose keeps a document-shaped editing surface. Structured content gets schema
validation. Content lives in two places rather than one, and a maintainer has
to know which kind they are editing.

### A hosted CMS with a web editing UI

Officers edit content in a browser with no exposure to Git. Adds an external
service and a second account to hand over at turnover, alongside the hosting
account, and introduces a dependency that can change its terms or shut down.

## Decision

We will store prose as MDX files and structured content as TypeScript data
files validated by Zod schemas at module load.

### Reasons

- Validation runs on import, so a malformed entry fails the build and the
  deploy never happens. This is the only error-catching mechanism that works
  for an editor who cannot run the site.
- The two content kinds fail in different ways, and neither storage format
  handles both well. Prose in a schema is painful to edit; records in prose are
  unverifiable.
- Keeping content in the repository means it is versioned, reviewable in a pull
  request, and has no account to hand over beyond the repository itself.
- A CMS would remove editing friction, but that friction has not yet been
  measured against actual officer turnover, and a CMS adds exactly the kind of
  external dependency this club is poorly placed to maintain.

## Consequences

### Positive

- Malformed structured content will break the build with a message naming the
  file and field.
- Content changes will be reviewable as diffs and previewable per pull request.
- The site will have no content dependency outside the repository.

### Negative

- Maintainers will have to learn which content lives in which format.
- Officers will still need a GitHub account and basic familiarity with editing
  files there.
- Restructuring a content shape will mean changing a schema and its consumers
  together, which is more work than editing a document would be.
