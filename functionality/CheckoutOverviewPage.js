import locators from '../locator/CheckoutOverviewLocator.js';

export default class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async finishOrder() {
    await this.page.click(locators.finishButton);
  }

  async cancelOrder() {
    await this.page.click(locators.cancelButton);
  }

  async isOrderSummaryVisible() {
    return this.page.isVisible(locators.summaryInfo);
  }
}
