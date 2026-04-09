# Portfolio Repair Design

## Goal

Repair the existing `lorre-portfolio` site without changing its visual direction, then ship the fixes to GitHub and a Vercel preview deployment.

## Approved Scope

- Keep the current layout, palette, and content structure.
- Fix project filtering so the spotlight card always matches the visible project set.
- Improve anchor navigation so sticky navigation does not cover section headings.
- Improve accessibility with visible keyboard focus treatment and live-region feedback for the copy-email toast.
- Improve image handling for the hero portrait.
- Replace broad `transition: all` usage with explicit transition properties.
- Remove the Next.js Turbopack workspace-root warning caused by the parent lockfile.
- Exclude local-only tool folders from git noise if needed for a clean publish flow.

## Architecture

The site remains a single App Router page driven by `app/content.js`. Behavior fixes stay inside `app/page.jsx`, visual and accessibility fixes stay inside `app/globals.css`, and framework/deployment fixes stay inside `next.config.js` plus lightweight repo metadata files where useful.

Regression coverage will focus on user-observable behavior:

- selecting a project filter updates the spotlight content
- copy-email feedback is exposed through a live region
- section anchors include offset spacing for the sticky header

## Risks

- The project currently has no automated test harness, so the smallest sustainable test setup should be added.
- The repo has local `.claude/` and `.vercel/` folders that should not be swept into the publish commit accidentally.

## Validation

- Run the new regression test(s).
- Run a fresh production build.
- Capture fresh browser screenshots for desktop and mobile.
- Push only intended files.
- Create a Vercel preview deployment and report the URL.
