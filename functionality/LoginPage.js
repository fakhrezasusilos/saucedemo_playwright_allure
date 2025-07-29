import locators from '../locator/LoginPageLocator.js';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(locators.usernameInput, username);
    await this.page.fill(locators.passwordInput, password);
    await this.page.click(locators.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(locators.errorMessage);
  }
}
