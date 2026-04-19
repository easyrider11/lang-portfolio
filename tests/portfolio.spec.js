const { test, expect } = require("@playwright/test");

test("spotlight follows the filtered project list", async ({ page }) => {
  await page.goto("/");

  await page.locator(".filter").getByRole("button", { name: "Mobile" }).click();

  await expect(page.locator(".work__cards .project-card")).toHaveCount(1);
  await expect(page.locator(".work__cards .project-card").first()).toContainText(
    "FTS Scanner App"
  );
  await expect(page.locator(".work__spotlight h3")).toHaveText("FTS Scanner App");
});

test("copy email feedback is announced politely", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"], {
    origin: "http://localhost:3000"
  });

  await page.goto("/");
  await page.getByRole("button", { name: "Copy Email" }).click();

  const toast = page.locator(".toast");
  await expect(toast).toBeVisible();
  await expect(toast).toHaveAttribute("aria-live", "polite");
});

test("projects section reserves anchor offset for the sticky header", async ({
  page
}) => {
  await page.goto("/#projects");

  const scrollMarginTop = await page.locator("#projects").evaluate((node) => {
    return window.getComputedStyle(node).scrollMarginTop;
  });

  expect(Number.parseFloat(scrollMarginTop)).toBeGreaterThan(0);
});
