# Lorre Li — Portfolio

Minimal serif portfolio site built with Next.js.

## Getting Started

```bash
npm install
npm run dev
```

## Customize Content

All rendered content lives in `app/content.js` — profile, intro, beliefs,
timeline, and projects. Inline links inside text use `[label](url)`.

## Assets

- `public/resume.pdf`

## Tests

```bash
npm test
```

## OSS status check

```bash
npm run check-oss
```

Compares the status chips in `app/content.js` ledgers against live GitHub
state via `gh`. Non-zero exit on drift.
