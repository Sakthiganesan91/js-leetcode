import { test, expect } from "@playwright/test";

const LOGIN_URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

const DASHBOARD_URL = `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index`;
let loginUsername = `Admin`;
let loginPassword = `admin123`;

const fields = {
  username: `//input[@name='username']`,
  password: `//input[@name='password']`,
  loginButton: `//form//button[@type='submit' and normalize-space(contains(text(),'Login'))]`,
  dashboardUsername: `//div[@id='app']//p[contains(@class,'oxd-userdropdown-name') and text()]`,
};
test("verify login flow", async ({ page }) => {
  await page.goto(LOGIN_URL, { waitUntil: "domcontentloaded" });
  await expect(page.locator(fields.username)).toBeVisible();
  await expect(page.locator(fields.password)).toBeVisible();
  await page.locator(fields.username).fill(loginUsername);
  await page.locator(fields.password).fill(loginPassword);
  await expect(page.locator(fields.loginButton)).toBeEnabled();
  const button = page.locator(fields.loginButton);
  await button.click();
  await page.waitForURL(DASHBOARD_URL, {
    waitUntil: "domcontentloaded",
  });
  await expect(page).toHaveURL(DASHBOARD_URL);
  await expect(page.locator(fields.dashboardUsername)).toBeVisible();
});
