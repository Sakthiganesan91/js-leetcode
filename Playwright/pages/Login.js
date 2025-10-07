import { expect } from "@playwright/test";

export class Login {
  constructor(page) {
    this.page = page;
    this.fields = {
      username: `//input[@name='username']`,
      password: `//input[@name='password']`,
      loginButton: `//form//button[@type='submit' and normalize-space(contains(text(),'Login'))]`,
      dashboardUsername: `//div[@id='app']//p[contains(@class,'oxd-userdropdown-name') and normalize-space(text())]`,
    };
  }

  async login(username, password) {
    let usernameField = this.fields.username;
    let passwordField = this.fields.password;
    let loginButton = this.fields.loginButton;
    let _page = this.page;
    await expect(_page.locator(usernameField)).toBeVisible();
    await expect(_page.locator(passwordField)).toBeVisible();
    await _page.locator(usernameField).fill(username);
    await _page.locator(passwordField).fill(password);
    await expect(_page.locator(loginButton)).toBeEnabled();
    const button = _page.locator(loginButton);
    await button.click();
  }

  async verifyLogin(url) {
    let dashboardUsernameField = this.fields.dashboardUsername;
    let _page = this.page;
    await _page.waitForURL(url, {
      waitUntil: "networkidle",
    });
    await expect(_page).toHaveURL(url);
    await expect(_page.locator(dashboardUsernameField)).toBeVisible();
  }
}
