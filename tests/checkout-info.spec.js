import { test, expect } from '@playwright/test';
import LoginPage from '../functionality/LoginPage.js';
import ProductPage from '../functionality/ProductPage.js';
import CartPage from '../functionality/CartPage.js';
import CheckoutInfoPage from '../functionality/CheckoutInfoPage.js';

test.describe('Checkout Info Page Tests', () => {
  let loginPage, productPage, cartPage, infoPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    infoPage = new CheckoutInfoPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addToCart();
    await productPage.openCart();
    await cartPage.clickCheckout();
  });

  test('SL-CHKI-001 - Valid checkout information proceeds', async ({ page }) => {
    await infoPage.fillInfo('John', 'Doe', '12345');
    await infoPage.continueCheckout();
    await expect(page).toHaveURL(/checkout-step-two/);
  });

  test('SL-CHKI-002 - Missing first name error', async () => {
    await infoPage.fillInfo('', 'Doe', '12345');
    await infoPage.continueCheckout();
    const error = await infoPage.getErrorMessage();
    expect(error).toContain('First Name is required');
  });

  test('SL-CHKI-003 - Missing last name error', async () => {
    await infoPage.fillInfo('John', '', '12345');
    await infoPage.continueCheckout();
    const error = await infoPage.getErrorMessage();
    expect(error).toContain('Last Name is required');
  });

  test('SL-CHKI-004 - Missing zip code error', async () => {
    await infoPage.fillInfo('John', 'Doe', '');
    await infoPage.continueCheckout();
    const error = await infoPage.getErrorMessage();
    expect(error).toContain('Postal Code is required');
  });

  test('SL-CHKI-005 - Cancel redirects to cart page', async ({ page }) => {
    await infoPage.cancelCheckout();
    await expect(page).toHaveURL(/cart/);
  });
});
