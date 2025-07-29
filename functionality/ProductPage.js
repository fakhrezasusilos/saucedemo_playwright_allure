import locators from '../locator/ProductPageLocator.js';

export default class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.click(locators.addBackpack);
  }

  async removeFromCart() {
    await this.page.click(locators.removeBackpack);
  }

  async openCart() {
    await this.page.click(locators.cartIcon);
  }

  async openMenu() {
    await this.page.click(locators.menuButton);
  }

  async clickAbout() {
    await this.page.click(locators.aboutLink);
  }

  async clickLogout() {
    await this.page.click(locators.logoutLink);
  }

  async isBackpackVisible() {
    return this.page.isVisible('text=Sauce Labs Backpack');
  }
}
