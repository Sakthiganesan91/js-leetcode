const { I } = inject();

class loginPage {
  usernameField: string;
  passwordField: string;
  loginButton: string;
  form: string;
  constructor() {
    this.form = `//form[@name='login']`;
    this.usernameField = `${this.form}//input[@name='userid']`;
    this.passwordField = `${this.form}//input[@name='pswrd']`;
    this.loginButton = `${this.form}//input[@type='button' and @value='Login']`;
  }

  login(username: string, password: string) {
    I.fillField(this.usernameField, username);
    I.fillField(this.passwordField, password);
    I.click(this.loginButton);
  }
}

// For inheritance
module.exports = new loginPage();
export = loginPage;
