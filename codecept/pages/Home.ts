import { within } from "codeceptjs";

const { I } = inject();

class homePage {
  menu: string;
  buttons: {
    buttonOne: string;
    buttonTwo: string;
  };
  search: {
    searchInput: string;
    searchButton: string;
  };
  constructor() {
    this.menu = `//div[@id='cssmenu']`;
    this.buttons = {
      buttonOne: `//button[@id='but1']`,
      buttonTwo: `//button[@id='but2']`,
    };
    this.search = {
      searchInput: `//input[@name='q']`,
      searchButton: `//input[@title='search' and @type='submit']`,
    };
  }

  async openMenuOption(subMenu: string, option: string) {
    await within(this.menu, () => {
      I.moveCursorTo(`//span[@id='${subMenu}']`);
      I.click(`//span[text()='${option}']`);
    });
  }

  validateSearch(searchString: string) {
    I.fillField(this.search.searchInput, searchString);
    I.click(this.search.searchButton);
  }
  async verifyButtonDisableStatus() {
    try {
      let buttonOneStatus = await I.grabDisabledElementStatus(
        this.buttons.buttonOne
      );
      let buttonTwoStatus = await I.grabDisabledElementStatus(
        this.buttons.buttonTwo
      );

      return buttonOneStatus && !buttonTwoStatus;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new homePage();
export = homePage;
