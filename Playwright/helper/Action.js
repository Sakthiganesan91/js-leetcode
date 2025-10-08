import { expect } from "@playwright/test";

export class Action {
  constructor(page) {
    this.page = page;
  }

  async click(locator) {
    await expect(this.page.locator(locator)).toBeEnabled();
    await this.page.locator(locator).click();
  }
  async fillField(locator, value) {
    await expect(this.page.locator(locator)).toBeEditable();
    await this.page.locator(locator).fill(value);
  }

  async waitForURL(url, state) {
    await this.page.waitForURL(url, {
      waitUntil: state,
    });
  }

  async waitForElement(locator, options) {
    await this.page.locator(locator).waitFor(options);
  }
}
