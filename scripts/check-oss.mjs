#!/usr/bin/env node
// Compares the status chips in app/content.js ledgers against live GitHub
// state via the `gh` CLI. Exits non-zero on drift so it can run in CI.
//
//   npm run check-oss

import { execFileSync } from "node:child_process";
import { projects } from "../app/content.js";

const PR_RE = /github\.com\/([^/]+\/[^/]+)\/pull\/(\d+)/;
const ISSUE_RE = /github\.com\/([^/]+\/[^/]+)\/issues\/(\d+)/;

function gh(args) {
  return execFileSync("gh", args, { encoding: "utf8" }).trim();
}

function liveStatus(href) {
  let m = href.match(PR_RE);
  if (m) {
    const out = JSON.parse(
      gh(["api", `repos/${m[1]}/pulls/${m[2]}`, "--jq", '{"state": .state, "merged": .merged}'])
    );
    return out.merged ? "merged" : out.state === "open" ? "open" : "closed";
  }
  m = href.match(ISSUE_RE);
  if (m) {
    const out = JSON.parse(
      gh(["api", `repos/${m[1]}/issues/${m[2]}`, "--jq", '{"state": .state}'])
    );
    return out.state === "open" ? "issue" : "issue-closed";
  }
  return null; // not a PR/issue link (e.g. the disproved repro harness) — skip
}

let drift = 0;
let checked = 0;

for (const project of projects) {
  for (const group of project.report?.ledger ?? []) {
    for (const item of group.items) {
      if (!item.href) continue;
      const live = liveStatus(item.href);
      if (live === null) continue;
      checked += 1;
      const ok = live === item.status;
      if (!ok) {
        drift += 1;
        console.log(
          `DRIFT  ${group.repo} ${item.ref}: site says "${item.status}", GitHub says "${live}"  (${item.href})`
        );
      } else {
        console.log(`ok     ${group.repo} ${item.ref}: ${item.status}`);
      }
    }
  }
}

console.log(`\n${checked} checked, ${drift} drifted`);
if (drift > 0) {
  console.log("Update the status chips in app/content.js.");
  process.exit(1);
}
