import { expect } from "@playwright/test";

export class Admin {
  constructor(page) {
    this.page = page;
    this.dashBoardFields = {
      adminLink: `//nav[@role='navigation']//ul[contains(@class,'oxd-main-menu')]//span[text()='Admin']/..`,
    };
    this.adminPageFields = {
      usersTable: `//div[@role='table' and contains(@class,'oxd-table')]`,
      editButton: (userName) =>
        `//div[@role='table']//div[@role='row' and .//div[text()='${userName}']]//div[contains(@class,'oxd-table-cell-actions')]/button[i[contains(@class,'bi-pencil-fill')]]`,
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
    await expect(_page).toHaveURL(url);
    await _page.locator(this.dashBoardFields.adminLink).click();
    await expect(_page.locator(this.dashBoardFields.adminLink)).toContainClass(
      "active"
    );
  }
  async editUserName(oldUserName, newUserName) {
    let _page = this.page;
    await expect(_page.locator(this.adminPageFields.usersTable)).toBeVisible();
    await _page.locator(this.adminPageFields.editButton(oldUserName)).click();
    await expect(_page.locator(this.editPage.userNameField)).toHaveValue(
      oldUserName
    );
    await _page.locator(this.editPage.userNameField).fill(newUserName);
    await expect(_page.locator(this.editPage.userNameField)).toHaveValue(
      newUserName
    );
    await _page.locator(this.editPage.submitButton).click();
  }
  async verifyChangedUserName(newUserName) {
    let _page = this.page;
    await _page
      .locator(this.adminPageFields.usersTable)
      .waitFor({ state: "visible", timeout: 20000 });

    await expect(
      _page.locator(this.editPage.userField(newUserName))
    ).toBeVisible();
  }
}
