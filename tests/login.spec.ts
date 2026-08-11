import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testUsers } from './data/testData';

test.describe('SauceDemo login flow', () => {
  test('logs in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testUsers.valid.username, testUsers.valid.password);

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
  });

  test('shows an error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testUsers.invalid.username, testUsers.invalid.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/\/$/);
  });
});
