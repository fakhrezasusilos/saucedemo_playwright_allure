import locators from '../locator/CheckoutCompleteLocator.js';

export default class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
  }

  async clickBackHome() {
    await this.page.click(locators.backHomeButton);
  }

  async isThankYouVisible() {
    return this.page.isVisible(locators.completeHeader);
  }
}
