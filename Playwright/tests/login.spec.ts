import { test } from "@playwright/test";
import { Login } from "../pages/Login";

const LOGIN_URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

const DASHBOARD_URL = `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index`;

let loginUsername = `Admin`;
let loginPassword = `admin123`;

test("login", async ({ page }) => {
  await page.goto(LOGIN_URL, { waitUntil: "networkidle" });
  const loginPage = new Login(page);
  await loginPage.login(loginUsername, loginPassword);
  await loginPage.verifyLogin(DASHBOARD_URL);
  await page.context().storageState({ path: "auth.json" });
});
