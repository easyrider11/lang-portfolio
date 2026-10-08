#!/usr/bin/env node
// Renders one 1200x630 Open Graph card per page into public/og/*.png using
// the system Chrome (same channel the Playwright tests use). Re-run after
// changing content.js:   npm run gen-og

import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { profile, proof, projects } from "../app/content.js";

const OUT = new URL("../public/og/", import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const esc = (t) =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function card({ kicker, title, stats, footer }) {
  const statHtml = (stats || [])
    .slice(0, 4)
    .map(
      (s) =>
        `<div class="stat"><div class="v">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`
    )
    .join("");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    html, body { width:1200px; height:630px; background:#fff; }
    body { font-family: Charter, "Bitstream Charter", Georgia, serif; color:#27272a;
           padding:64px 72px; display:flex; flex-direction:column; justify-content:space-between; }
    .kicker { font-size:26px; color:#71717a; }
    .title { font-size:${title.length > 28 ? 60 : 72}px; font-weight:700; letter-spacing:-0.02em;
             color:#18181b; line-height:1.08; margin-top:14px; max-width:1000px; }
    .stats { display:grid; grid-template-columns:repeat(${Math.max(1, Math.min(4, (stats || []).length))},1fr);
             gap:28px; border-top:1px solid #e4e4e7; padding-top:26px; }
    .v { font-size:42px; font-weight:700; color:#18181b; font-variant-numeric:tabular-nums; }
    .l { font-size:19px; color:#71717a; margin-top:6px; line-height:1.3; }
    .footer { display:flex; justify-content:space-between; font-size:22px; color:#71717a; margin-top:26px; }
    .footer b { color:#18181b; }
  </style></head><body>
    <div><div class="kicker">${esc(kicker)}</div><div class="title">${esc(title)}</div></div>
    <div>${statHtml ? `<div class="stats">${statHtml}</div>` : ""}
      <div class="footer"><span><b>${esc(profile.name)}</b> · ${esc(footer)}</span><span>lorre-portfolio.vercel.app</span></div>
    </div>
  </body></html>`;
}

const pages = [
  {
    name: "home",
    kicker: "Robotics & AI systems engineer · Stanford MS CS ’27",
    title: "Systems that work outside the demo — and the tooling that catches the ones that don’t.",
    stats: proof,
    footer: "Meta · Superpose · Notre Dame"
  },
  { name: "experience", kicker: "Experience", title: "Stanford · Superpose · Meta · Radical AI · Notre Dame", stats: [], footer: "Experience" },
  { name: "projects", kicker: "Projects", title: "Robots, linters, smoke tests, and upstream fixes.", stats: proof, footer: "Projects" },
  { name: "lab", kicker: "Lab", title: "Agent runtime loop — inject a fault, watch it recover.", stats: [], footer: "Interactive" },
  ...projects
    .filter((p) => p.report)
    .map((p) => ({
      name: p.slug,
      kicker: p.meta,
      title: p.title,
      stats: p.report.stats,
      footer: "Project report"
    }))
];

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const pg of pages) {
  await page.setContent(card(pg), { waitUntil: "load" });
  await page.screenshot({ path: `${OUT}${pg.name}.png`, type: "png" });
  console.log(`wrote og/${pg.name}.png`);
}
await browser.close();
