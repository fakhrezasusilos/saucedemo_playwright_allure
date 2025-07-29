import locators from '../locator/CartPageLocator.js';

export default class CartPage {
  constructor(page) {
    this.page = page;
  }

  async removeItem() {
    await this.page.click(locators.removeButton);
  }

  async clickContinueShopping() {
    await this.page.click(locators.continueShopping);
  }

  async clickCheckout() {
    await this.page.click(locators.checkoutButton);
  }

  async isItemVisible(itemName) {
    return this.page.isVisible(`text=${itemName}`);
  }
}
