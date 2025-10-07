import { test } from "@playwright/test";
import { Admin } from "../pages/Admin";

let oldUserName = "ABT123";
let newUserName = "Friram";

const DASHBOARD_URL = `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index`;

test.use({ storageState: "auth.json" });
test("edit username", async ({ page }) => {
  const adminPage = new Admin(page);
  await adminPage.navigateAdminPage(DASHBOARD_URL);
  await adminPage.editUserName(oldUserName, newUserName);
  await adminPage.verifyChangedUserName(newUserName);
});
