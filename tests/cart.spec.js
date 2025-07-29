import { test, expect } from '@playwright/test';
import LoginPage from '../functionality/LoginPage.js';
import ProductPage from '../functionality/ProductPage.js';
import CartPage from '../functionality/CartPage.js';

test.describe('Cart Page Tests', () => {
  let loginPage, productPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.addToCart();
    await productPage.openCart();
  });

  test('SL-CART-001 - Verify item in cart', async () => {
    expect(await cartPage.isItemVisible('Sauce Labs Backpack')).toBeTruthy();
  });

  test('SL-CART-002 - Remove item from cart', async () => {
    await cartPage.removeItem();
    await expect(cartPage.page.locator('.cart_item')).toHaveCount(0);
  });

  test('SL-CART-003 - Continue shopping from cart', async () => {
    await cartPage.clickContinueShopping();
    await expect(cartPage.page).toHaveURL(/inventory/);
  });

  test('SL-CART-004 - Proceed to checkout from cart', async () => {
    await cartPage.clickCheckout();
    await expect(cartPage.page).toHaveURL(/checkout-step-one/);
  });
});
