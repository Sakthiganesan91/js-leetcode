import { test } from "@playwright/test";
import { Login } from "../pages/Login";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

const loginUsername = process.env.LOGIN_USERNAME;
const loginPassword = process.env.LOGIN_PASSWORD;
const DASHBOARD_URL = process.env.DASHBOARD_URL;
const login_url = process.env.LOGIN_URL;

test("login", async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.login(login_url, loginUsername, loginPassword);
  await loginPage.verifyLogin(DASHBOARD_URL);
  await page.context().storageState({ path: "auth.json" });
});
