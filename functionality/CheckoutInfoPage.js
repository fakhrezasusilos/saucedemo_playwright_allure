import locators from '../locator/CheckoutInfoPageLocator.js';

export default class CheckoutInfoPage {
  constructor(page) {
    this.page = page;
  }

  async fillInfo(firstName, lastName, postalCode) {
    await this.page.fill(locators.firstName, firstName);
    await this.page.fill(locators.lastName, lastName);
    await this.page.fill(locators.postalCode, postalCode);
  }

  async continueCheckout() {
    await this.page.click(locators.continueButton);
  }

  async cancelCheckout() {
    await this.page.click(locators.cancelButton);
  }

  async getErrorMessage() {
    return this.page.textContent(locators.errorMessage);
  }
}
