Feature("practice");

const url = `https://omayo.blogspot.com/`;

//1
Scenario("Correct page loads on clicking menu item", ({ I, homePage }) => {
  I.amOnPage(url);
  homePage.openMenuOption("blogsmenu", "SeleniumByArun");
  I.seeInCurrentUrl("https://selenium-by-arun.blogspot.com/");
});

//2
Scenario("Read table rows and columns", async ({ I }) => {
  I.amOnPage(url);
  const text = await I.grabTextFrom(`//table[@id='table1']`);
  console.log(text);
});

//3
Scenario("Login with username and password", ({ I, loginPage }) => {
  I.amOnPage(url);
  loginPage.login("SeleniumByArun", "Test143$");
  I.waitForElement(`//div[@id='header-inner']`);
  I.seeElement(`//div[@id='header-inner']`);
});

//4
Scenario("Read from textbox", async ({ I }) => {
  I.amOnPage(url);
  const text = await I.grabValueFrom(`//input[@id='textbox1']`);
  console.log(text);
});

//5
Scenario("Verify button status", async ({ I, homePage }) => {
  I.amOnPage(url);
  const res = await homePage.verifyButtonDisableStatus();
  I.expectTrue(res);
});

//6
Scenario.only("Fill and extract text", async ({ I, homePage }) => {
  I.amOnPage(url);
  homePage.validateSearch("Searching");
  I.seeInCurrentUrl(`/search?q=Searching`);
});

//7
Scenario("read options and click", async ({ I }) => {
  I.amOnPage(url);
  const options = await I.grabTextFromAll(`//select[@id='drop1']/option`);
  for (let option of options) {
    console.log(option);
  }
  I.selectOption(`//select[@id='drop1']`, "doc 1");
  I.seeInField(`//select[@id='drop1']`, "doc 1");
});

//8
Scenario("Verify delayed button working", async ({ I }) => {
  I.amOnPage(url);
  I.click(`//div[@class='dropdown']/button[@class='dropbtn']`);
  I.waitForElement(`//div[@id='myDropdown']`, 3);
  I.click(`//div[@id='myDropdown']//a[text()='Flipkart']`);
  I.seeCurrentUrlEquals(`https://www.flipkart.com/`);
});

//9
Scenario("valid error keyword in iframe", ({ I }) => {
  I.amOnPage(url);
  I.switchTo(`//iframe[@id='iframe2']`);

  I.switchTo();
});
