import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly productItems: Locator;
  readonly productSortSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.productItems = page.locator('.inventory_item');
    this.productSortSelect = page.locator('[data-test="product-sort-container"]');
  }

  async getProductCount(): Promise<number> {
    return await this.productItems.count();
  }

  async getDisplayedProductNames(): Promise<string[]> {
    return await this.productItems.locator('.inventory_item_name').allTextContents();
  }

  async getDisplayedProductPrices(): Promise<string[]> {
    return await this.productItems.locator('.inventory_item_price').allTextContents();
  }

  async getDisplayedProductPricesAsNumbers(): Promise<number[]> {
    const prices = await this.getDisplayedProductPrices();
    return prices.map((price) => parseFloat(price.replace('$', '').trim()));
  }

  async getProductPriceByName(name: string): Promise<number> {
    const productItem = this.page.locator('.inventory_item', {
      has: this.page.locator('.inventory_item_name', { hasText: name }),
    });

    const priceText = await productItem.locator('.inventory_item_price').textContent();
    if (!priceText) {
      throw new Error(`Product price not found for product name: ${name}`);
    }

    return parseFloat(priceText.replace('$', '').trim());
  }

  async selectSortOption(optionLabel: string): Promise<void> {
    await this.productSortSelect.selectOption({ label: optionLabel });
  }
}
