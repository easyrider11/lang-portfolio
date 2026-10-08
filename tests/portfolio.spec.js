const { test, expect } = require("@playwright/test");

test("home renders the portrait, intro, and beliefs", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator(".intro")).toContainText("Lorre Li");
  await expect(page.locator(".beliefs")).toBeVisible();
  await expect(page.locator(".portrait")).toBeVisible();
});

test("home shows credentials, proof numbers, and a hero card", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator(".cred-strip li")).toHaveCount(4);
  await expect(page.locator(".cred-strip")).toContainText("Stanford");
  await expect(page.locator(".proof-strip > div")).toHaveCount(4);
  await expect(page.locator(".proof-strip")).toContainText("24/251");

  const cards = page.locator(".featured-card");
  await expect(cards).toHaveCount(4);
  await expect(cards.first()).toHaveClass(/featured-card--hero/);
  await cards.first().click();
  await expect(page).toHaveURL(/\/projects\/microduck-tricks$/);
  await expect(page.locator(".report-stats")).toContainText("200/200");
});

test("proof numbers link to the reports they come from", async ({ page }) => {
  await page.goto("/");
  await page.locator(".proof-strip a", { hasText: "500/500" }).click();
  await expect(page).toHaveURL(/\/projects\/robot-vision-copilot$/);
  await expect(page.locator(".report-stats")).toContainText("17,478");
});

test("project report page renders stats, body, and media", async ({ page }) => {
  await page.goto("/projects/upstream");

  await expect(page.locator(".page-title")).toHaveText("Upstream OSS Work");
  await expect(page.locator(".ledger")).toContainText("#944");
  await expect(page.locator(".chip--merged").first()).toHaveText("merged");
  await expect(page.locator(".ledger-items li")).toHaveCount(13);
  await expect(page.locator(".crumb a")).toHaveAttribute("href", "/projects");
});

test("experience page renders the timeline", async ({ page }) => {
  await page.goto("/experience");

  const timeline = page.locator(".timeline li");
  await expect(timeline.first()).toContainText("Stanford University");
  await expect(timeline.first()).toContainText("Jan 2027");
  await expect(timeline.nth(1)).toContainText("2026 – now");
  await expect(page.locator(".timeline")).toContainText("Meta");
  await expect(
    page.getByRole("link", { name: "Superpose on the App Store" })
  ).toHaveAttribute("href", "https://apps.apple.com/app/id6759357866");
});

test("education and honors are rendered on the experience page", async ({ page }) => {
  await page.goto("/experience");

  const timeline = page.locator(".timeline");
  await expect(timeline).toContainText("University of Notre Dame");
  await expect(timeline).toContainText("3.97");
  await expect(timeline).toContainText("Grand Challenge Scholarship");
});

test("nav goes to the projects page and lists current work", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("navigation").getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);

  const items = page.locator(".project-list li");
  await expect(items.first()).toContainText("Microduck RL Tricks");
  await expect(page.locator("#lerobot-dataset-lint")).toContainText("LeRobot Dataset Lint");
  await expect(page.locator(".earlier-title")).toHaveText("Earlier work");
  await expect(page.locator(".project-list--earlier li")).toHaveCount(9);
  await expect(page.locator(".project-list--earlier")).toContainText("FTS Scanner App");
});

test("project anchors reserve scroll offset", async ({ page }) => {
  await page.goto("/projects#lerobot-dataset-lint");

  const scrollMarginTop = await page
    .locator("#lerobot-dataset-lint")
    .evaluate((node) => window.getComputedStyle(node).scrollMarginTop);

  expect(Number.parseFloat(scrollMarginTop)).toBeGreaterThan(0);
});

test("header exposes email, GitHub, and résumé links", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    /^mailto:/
  );
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/easyrider11"
  );
  await expect(page.getByRole("link", { name: "Résumé" })).toHaveAttribute(
    "href",
    "/resume.pdf"
  );
});

test("report pages carry the narrative thread and an OG card", async ({ page }) => {
  await page.goto("/projects/lerobot-dataset-lint");

  await expect(page.locator(".report-next a")).toHaveAttribute("href", "/projects/policy-smoke");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /\/og\/lerobot-dataset-lint\.png$/
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image"
  );

  await page.locator(".report-next a").click();
  await expect(page).toHaveURL(/\/projects\/policy-smoke$/);
  await expect(page.locator(".report-stats")).toContainText("17 s");
  await expect(page.locator(".ledger")).toHaveCount(0);
});

test("home carries the default OG card", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /\/og\/home\.png$/
  );
});

test("lab page runs the agent loop and recovers from an injected fault", async ({ page }) => {
  await page.goto("/lab");

  await expect(page.locator(".lab-canvas")).toBeVisible();
  await expect(page.locator(".lab-state")).toHaveCount(5);
  await expect(page.locator(".lab-log")).toContainText("PERCEIVE", { timeout: 10_000 });

  await page.getByRole("button", { name: "Inject unsafe action" }).click();
  await expect(page.locator(".lab-log")).toContainText("VALIDATE  rejected", { timeout: 15_000 });

  await page.getByRole("button", { name: "Inject target lost" }).click();
  await expect(page.locator(".lab-log")).toContainText("RECOVER", { timeout: 30_000 });
  await expect(page.locator(".lab-honesty")).toContainText("not the Python simulator");
});
