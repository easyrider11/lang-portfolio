const { test, expect } = require("@playwright/test");

test("home renders the portrait, intro, and beliefs", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator(".intro")).toContainText("Lorre Li");
  await expect(page.locator(".beliefs")).toBeVisible();
  await expect(page.locator(".portrait")).toBeVisible();
});

test("home shows featured work cards linking to reports", async ({ page }) => {
  await page.goto("/");

  const cards = page.locator(".featured-card");
  await expect(cards).toHaveCount(4);
  await cards.first().click();
  await expect(page).toHaveURL(/\/projects\/robot-vision-copilot$/);
  await expect(page.locator(".report-stats")).toContainText("17,478");
});

test("project report page renders stats, body, and media", async ({ page }) => {
  await page.goto("/projects/upstream");

  await expect(page.locator(".page-title")).toHaveText("Upstream OSS Work");
  await expect(page.locator(".report-body")).toContainText("gz_ros2_control #944");
  await expect(page.locator(".crumb a")).toHaveAttribute("href", "/projects");
});

test("experience page renders the timeline", async ({ page }) => {
  await page.goto("/experience");

  const timeline = page.locator(".timeline li");
  await expect(timeline.first()).toContainText("2026 – now");
  await expect(page.locator(".timeline")).toContainText("Meta");
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
  await expect(items.first()).toContainText("Robot Vision Copilot");
  await expect(page.locator("#lerobot-dataset-lint")).toContainText("LeRobot Dataset Lint");
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
