/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file");
type homePage = import("./pages/Home");
type loginPage = import("./pages/Login");
type Expect = import("@codeceptjs/expect-helper");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    homePage: homePage;
    loginPage: loginPage;
  }
  interface Methods extends Playwright, Expect {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
