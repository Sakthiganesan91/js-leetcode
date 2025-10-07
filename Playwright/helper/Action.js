export class Action {
  constructor(page) {
    this.page = page;
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }
  async fillField(locator, value) {
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
