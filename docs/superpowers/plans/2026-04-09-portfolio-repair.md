# Portfolio Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Repair the portfolio's filtering, navigation offset, accessibility, and deployment ergonomics, then publish the changes safely.

**Architecture:** Keep the site as a single-page App Router portfolio. Add a minimal browser-level regression harness for the interactive behavior, then implement focused fixes in the page, CSS, and Next config.

**Tech Stack:** Next.js 16, React 18, Playwright, CSS, Vercel

---

### Task 1: Add Regression Coverage

**Files:**
- Create: `playwright.config.js`
- Create: `tests/portfolio.spec.js`
- Modify: `package.json`

- [ ] Add a Playwright test script and config that starts the local dev server for test runs.
- [ ] Write a failing test that clicks a project filter and expects the spotlight title to switch to the first visible project in that filtered set.
- [ ] Write a failing test that triggers the copy-email toast and expects the rendered toast node to expose `aria-live="polite"`.
- [ ] Write a failing test that loads `/#projects` and verifies the section has positive `scroll-margin-top`.
- [ ] Run the focused test command and confirm the expected failures before changing production code.

### Task 2: Implement The Page Fixes

**Files:**
- Modify: `app/page.jsx`
- Modify: `app/globals.css`

- [ ] Update project-filter state handling so spotlight content remains in sync with the current visible project list.
- [ ] Add semantic and accessible markup for the toast live region and any related interaction attributes.
- [ ] Add sticky-header anchor offset styling and visible keyboard focus states for the site’s interactive controls.
- [ ] Replace `transition: all` with explicit transition properties.
- [ ] Re-run the focused test command and confirm the new tests pass.

### Task 3: Framework And Repo Hygiene

**Files:**
- Modify: `next.config.js`
- Modify: `.gitignore`

- [ ] Configure `turbopack.root` in `next.config.js` to stop the incorrect workspace-root inference.
- [ ] Ignore local-only `.vercel/` and `.claude/` folders so the publish diff stays intentional.
- [ ] Run the production build and confirm the previous root-warning is gone.

### Task 4: Verify, Publish, And Deploy

**Files:**
- Modify: `package-lock.json`

- [ ] Run the regression tests, production build, and fresh browser screenshots for desktop and mobile.
- [ ] Review `git status` and stage only the intended files.
- [ ] Commit with a focused message and push the branch to GitHub.
- [ ] Create a Vercel preview deployment for the updated portfolio and capture the preview URL for handoff.
