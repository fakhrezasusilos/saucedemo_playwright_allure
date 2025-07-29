import { test, expect } from '@playwright/test';
import LoginPage from '../functionality/LoginPage.js';

test.describe('Login Page Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('SL-LGN-001 - Successful login with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('SL-LGN-002 - Error for invalid username', async () => {
    await loginPage.login('invalid_user', 'secret_sauce');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('SL-LGN-003 - Error for invalid password', async () => {
    await loginPage.login('standard_user', 'wrong_password');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('SL-LGN-004 - Error for empty username', async () => {
    await loginPage.login('', 'secret_sauce');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username is required');
  });

  test('SL-LGN-005 - Error for empty password', async () => {
    await loginPage.login('standard_user', '');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Password is required');
  });

  test('SL-LGN-006 - Locked out user cannot login', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('user has been locked out');
  });
});
