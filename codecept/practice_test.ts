Feature("practice");

const url = `https://omayo.blogspot.com/`;

//1
Scenario("Correct page loads on clicking menu item", ({ I }) => {
  I.amOnPage(url);

  I.moveCursorTo(`//div[@id='cssmenu']//span[@id='blogsmenu']`);
  I.click({
    xpath: `//div[@id='cssmenu']//span[text()='SeleniumByArun']`,
  });
  I.seeInCurrentUrl("https://selenium-by-arun.blogspot.com/");
});

//2
Scenario("Read table rows and columns", async ({ I }) => {
  I.amOnPage(url);
  const text = await I.grabTextFrom(`//table[@id='table1']`);
  console.log(text);
});

//4
Scenario("Read from textbox", async ({ I }) => {
  I.amOnPage(url);
  const text = await I.grabValueFrom(`//input[@id='textbox1']`);
  console.log(text);
});

//5
Scenario("Verify button status", async ({ I }) => {
  I.amOnPage(url);
  let buttonOneStatus = await I.grabDisabledElementStatus(
    `//button[@id='but1']`
  );
  let buttonTwoStatus = await I.grabDisabledElementStatus(
    `//button[@id='but2']`
  );
  I.expectTrue(buttonOneStatus && !buttonTwoStatus);
});

//6
Scenario("Fill and extract text", async ({ I }) => {
  I.amOnPage(url);
  I.fillField(`//input[@name='q']`, "Searching");
  I.click(`//input[@title='search' and @type='submit']`);
  I.seeInCurrentUrl(`https://omayo.blogspot.com/search?q=Searching`);
});

//8
Scenario("Verify delayed button working", async ({ I }) => {
  I.amOnPage(url);
  I.click(`//div[@class='dropdown']/button[@class='dropbtn']`);
  I.waitForElement(`//div[@id='myDropdown']`, 3);
  I.click(`//div[@id='myDropdown']//a[text()='Flipkart']`);
  I.seeCurrentUrlEquals(`https://www.flipkart.com/`);
});
