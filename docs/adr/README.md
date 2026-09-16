# Architecture Decision Records

Decisions that would be expensive to reverse. Small choices and conventions
belong in the nearest `CLAUDE.md` instead.

| ADR                                                  | Decision                                | Status   |
| ---------------------------------------------------- | --------------------------------------- | -------- |
| [1](0001-use-nextjs-with-static-export.md)           | Use Next.js with static export          | Accepted |
| [2](0002-host-on-netlify.md)                         | Host on Netlify                         | Accepted |
| [3](0003-split-content-into-prose-and-typed-data.md) | Split content into prose and typed data | Accepted |
| [4](0004-use-tailwind-css-v4-for-styling.md)         | Use Tailwind CSS v4 for styling         | Accepted |

Write a new ADR when a decision is architectural and costly to undo. Record a
reversal as a new ADR, and set the superseded record's status to `Rejected`
with a note pointing at its replacement.
