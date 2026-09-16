# 4. Use Tailwind CSS v4 for Styling

Status: Accepted

Date: 2026-09-16

## Context

The site needs a visual system: a colour palette that works in both light and
dark mode, consistent spacing and typography, and a set of repeated components
(cards, buttons, section bands).

The styling approach is the decision a new maintainer collides with first and
most often. Changing a colour, adjusting spacing, or adding a section all go
through it, and unlike the content layer it cannot be isolated from someone
making a small change.

Whatever we choose will be copied by every future contributor, including those
working from an AI assistant's suggestions, so the more conventional it is the
more likely the codebase stays coherent.

We need to decide how styles are authored and where design tokens live.

## Options Considered

### A single global stylesheet

The least machinery possible: one CSS file, semantic class names, no build
integration beyond what the framework already does. At this site's size it
works. It has no mechanism for preventing selectors from colliding, so it
degrades as the number of pages grows and rewards discipline that rotating
maintainers will not consistently have.

### CSS Modules with custom properties

Styles scoped per component by the build, tokens as custom properties on the
root. Requires only CSS knowledge, and keeps markup free of presentational
detail. Costs a second file per component and leaves naming conventions to be
maintained by hand.

### Tailwind CSS v4

Utility classes in the markup, with design tokens declared in a single
`@theme` block. Collisions are impossible because there are no custom
selectors, and the token block gives one place to change the palette. Markup
carries long `class` attributes, and the utility vocabulary has to be learned
before the codebase is editable.

### Tailwind plus a component library

Tailwind with accessible pre-built components copied into the repository.
Removes the need to hand-build interactive primitives, at the cost of
generated code and dependencies that a site with one interactive element does
not obviously need.

## Decision

We will use Tailwind CSS v4, with design tokens defined in a single `@theme`
block and dark mode handled by overriding those tokens under a
`prefers-color-scheme` media query.

### Reasons

- Tailwind is the styling approach current students are most likely to have
  seen, and the one AI assistants generate most reliably, which matters for a
  repository maintained by whoever is available rather than by anyone in
  particular.
- Defining the palette as tokens in one block means the entire site can be
  recoloured from a single place, and the dark palette is that same block's
  values overridden.
- Utilities cannot collide, so a maintainer adding a section cannot break an
  existing one — the specific failure mode a global stylesheet invites.
- We are not adding a component library. The site has one interactive element,
  the FAQ disclosure, and the native `details` element handles it with correct
  keyboard and screen reader behaviour and no dependency.

## Consequences

### Positive

- The palette will be changeable from one block, in both themes at once.
- Styles will be visible at the point of use, so a maintainer will not have to
  trace a class name to another file to understand what it does.
- Unused CSS will not accumulate, since utilities are generated from what the
  markup actually references.

### Negative

- Markup will carry long `class` attributes, which makes component files
  harder to scan.
- Contributors who know CSS but not Tailwind will have to learn the utility
  vocabulary before they can make a visual change.
- Tailwind's major versions have changed configuration substantially in the
  past, so upgrades will require attention rather than being routine.
