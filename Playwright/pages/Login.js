import { expect } from "@playwright/test";
import { Action } from "../helper/Action";

export class Login {
  constructor(page) {
    this.page = page;
    this.fields = {
      username: `//input[@name='username']`,
      password: `//input[@name='password']`,
      loginButton: `//form//button[@type='submit' and normalize-space(contains(text(),'Login'))]`,
      dashboardUsername: `//div[@id='app']//p[contains(@class,'oxd-userdropdown-name') and normalize-space(text())]`,
    };
    this.action = new Action(page);
  }

  async login(username, password) {
    let usernameField = this.fields.username;
    let passwordField = this.fields.password;
    let loginButton = this.fields.loginButton;
    let _page = this.page;
    await expect(_page.locator(usernameField)).toBeVisible();
    await expect(_page.locator(passwordField)).toBeVisible();
    await this.action.fillField(usernameField, username);
    await this.action.fillField(passwordField, password);
    await expect(_page.locator(loginButton)).toBeEnabled();
    await this.action.click(loginButton);
  }

  async verifyLogin(url) {
    let dashboardUsernameField = this.fields.dashboardUsername;
    let _page = this.page;
    await this.action.waitForURL(url, "networkidle");
    await expect(_page).toHaveURL(url);
    await expect(_page.locator(dashboardUsernameField)).toBeVisible();
  }
}
