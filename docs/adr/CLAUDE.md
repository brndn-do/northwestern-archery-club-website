# Writing ADRs

Records the decisions that would be expensive to reverse. Most changes to this
repository do not need one — conventions and small choices belong in the
nearest `CLAUDE.md`.

## When to write one

Write an ADR for a decision that is architectural and costly to undo: the
framework, the host, the content model, the styling approach. Do not write one
for an implementation detail, a chore, or a choice that could be reversed in an
afternoon.

An ADR captures a decision, not a how-to. Keep implementation specifics out of
it.

## Format

Filename: `NNNN-verb-the-decision.md`, numbered sequentially. Title and
filename both start with a verb — "Use Tailwind CSS v4 for Styling", not
"Tailwind CSS v4".

Sections, in order:

**Context** — neutral. Present the problem and the constraints without
implying the outcome; a reader should not be able to guess the decision from
this section. End it with "We need to decide ...".

**Options Considered** — one subsection per option, each with its upsides and
its costs. Keep options mutually exclusive. If they are not, say so in a short
note; if they are not tightly coupled, they probably belong in separate ADRs.
Do not add a note when they are mutually exclusive — that is the default.

**Decision** — starts "We will", in future tense, followed by a **Reasons**
subsection giving the specific factors that tipped it. Reasons are not a
restatement of Context.

**Consequences** — future tense, split into **Positive** and **Negative**.
Negative consequences are not optional; an ADR with no costs has not been
thought through.

## Reversing a decision

Write a new ADR recording the new decision. Set the superseded record's status
to `Rejected` and add a short note above its Context saying what was rejected,
why, and which ADR replaces it. Keep the file.

Update the table in `README.md` whenever a record is added or its status
changes.
