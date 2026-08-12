import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { testUsers } from './data/testData';

const expectedProductCount = 6;

test.describe('SauceDemo product catalog', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testUsers.valid.username, testUsers.valid.password);
  });

  test('authenticated user sees the products page', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await expect(productsPage.productsTitle).toBeVisible();
    await expect(productsPage.productsTitle).toHaveText('Products');
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  test('displays the expected number of products', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    const productCount = await productsPage.getProductCount();

    expect(productCount).toBe(expectedProductCount);
  });

  test('shows correct name and price for a specific product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const targetProductName = 'Sauce Labs Backpack';

    const displayedNames = await productsPage.getDisplayedProductNames();
    const productPrice = await productsPage.getProductPriceByName(targetProductName);

    expect(displayedNames).toContain(targetProductName);
    expect(productPrice).toBe(29.99);
  });

  test('sorts products by name correctly', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.selectSortOption('Name (Z to A)');

    const displayedNames = await productsPage.getDisplayedProductNames();
    const expectedNames = [...displayedNames].sort((a, b) => b.localeCompare(a));

    expect(displayedNames).toEqual(expectedNames);
  });

  test('sorts products by price correctly', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.selectSortOption('Price (low to high)');

    const displayedPrices = await productsPage.getDisplayedProductPricesAsNumbers();
    const expectedPrices = [...displayedPrices].sort((a, b) => a - b);

    expect(displayedPrices).toEqual(expectedPrices);
  });
});
