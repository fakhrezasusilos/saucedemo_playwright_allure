import { test, expect } from '@playwright/test';
import LoginPage from '../functionality/LoginPage.js';
import ProductPage from '../functionality/ProductPage.js';

test.describe('Products Page Tests', () => {
  let loginPage, productPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('SL-PROD-001 - Verify product display', async () => {
    expect(await productPage.isBackpackVisible()).toBeTruthy();
  });

  test('SL-PROD-002 - Add "Sauce Labs Backpack" to cart', async () => {
    await productPage.addToCart();
    await expect(productPage.page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('SL-PROD-003 - Verify hamburger menu functionality', async () => {
    await productPage.openMenu();
    await expect(productPage.page.locator('.bm-item-list')).toBeVisible();
  });

  test('SL-PROD-004 - Navigate to "About" page from menu', async () => {
    await productPage.openMenu();
    await productPage.clickAbout();
    await expect(productPage.page).toHaveURL(/saucelabs/);
  });

  test('SL-PROD-005 - Logout from products page', async () => {
    await productPage.openMenu();
    await productPage.clickLogout();
    await expect(productPage.page).toHaveURL(/saucedemo\.com\//);
  });
});
