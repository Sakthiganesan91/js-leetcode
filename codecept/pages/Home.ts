const { I } = inject();

class homePage {
  menu: string;
  buttons: {
    buttonOne: string;
    buttonTwo: string;
  };
  constructor() {
    this.menu = `//div[@id='cssmenu']`;
    this.buttons = {
      buttonOne: `//button[@id='but1']`,
      buttonTwo: `//button[@id='but2']`,
    };
  }

  openMenuOption(subMenu: string, option: string) {
    I.moveCursorTo({
      xpath: `${this.menu}//span[@id='${subMenu}']`,
    });
    I.click(`${this.menu}//span[text()='${option}']`);
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
