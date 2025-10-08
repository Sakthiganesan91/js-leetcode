import { test } from "@playwright/test";
import { Admin } from "../pages/Admin";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

let oldUserName = process.env.OLD_USERNAME;
let newUserName = process.env.NEW_USERNAME;

const DASHBOARD_URL = process.env.DASHBOARD_URL;

test.use({ storageState: "auth.json" });
test("edit username", async ({ page }) => {
  const adminPage = new Admin(page);
  await adminPage.navigateAdminPage(DASHBOARD_URL);
  await adminPage.editUserName(oldUserName, newUserName);
  await adminPage.verifyChangedUserName(newUserName);
});
