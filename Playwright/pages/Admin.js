import { expect } from "@playwright/test";
import { Action } from "../helper/Action";

export class Admin {
  constructor(page) {
    this.page = page;
    this.action = new Action(page);
    this.dashBoardFields = {
      adminLink: `//nav[@role='navigation']//ul[contains(@class,'oxd-main-menu')]//span[text()='Admin']/..`,
    };
    this.adminPageFields = {
      usersTable: `//div[@role='table' and contains(@class,'oxd-table')]`,
      editButton: (userName) =>
        `//div[@role='table']//div[@role='row' and ./div[not(@role='columnheader')]]//div[@role='cell' and position()=2]//div[normalize-space(text())='${userName}']//..//following-sibling::div//div[contains(@class,'oxd-table-cell-actions')]/button[i[contains(@class,'bi-pencil-fill')]]`,
      //   editButton: (userName) =>
      //     `//div[@role='table']//div[@role='row' and .//div[text()='${userName}']]//div[contains(@class,'oxd-table-cell-actions')]/button[i[contains(@class,'bi-pencil-fill')]]`,
    };

    this.editPage = {
      userNameField: `//form[contains(@class,'oxd-form')]//label[contains(text(),'Username')]//parent::div//following-sibling::div/input`,
      submitButton: `//form[contains(@class,'oxd-form')]//button[@type='submit' and normalize-space(.)='Save']`,
      userField: (userName) =>
        `//div[@role='table']//div[@role='row']//div[normalize-space(text())='${userName}']`,
    };
  }

  async navigateAdminPage(url) {
    let _page = this.page;
    await _page.goto(url, { waitUntil: "networkidle" });
    await this.action.click(this.dashBoardFields.adminLink);
    await expect(_page.locator(this.dashBoardFields.adminLink)).toContainClass(
      "active"
    );
  }
  async editUserName(oldUserName, newUserName) {
    let _page = this.page;
    await expect(_page.locator(this.adminPageFields.usersTable)).toBeVisible();
    await this.action.click(this.adminPageFields.editButton(oldUserName));
    await expect(_page.locator(this.editPage.userNameField)).toHaveValue(
      oldUserName
    );
    await this.action.fillField(this.editPage.userNameField, newUserName);
    await expect(_page.locator(this.editPage.userNameField)).toHaveValue(
      newUserName
    );
    await this.action.click(this.editPage.submitButton);
  }
  async verifyChangedUserName(newUserName) {
    let _page = this.page;
    await this.action.waitForElement(this.adminPageFields.usersTable, {
      state: "visible",
      timeout: 20000,
    });
    await expect(
      _page.locator(this.editPage.userField(newUserName))
    ).toBeVisible();
  }
}
