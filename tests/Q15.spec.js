// Q15  Screenshots & Videos
// Write a Playwright script that visits a product listing page, takes a full-page screenshot and
//  saves it as 'products.png', then takes a screenshot of just one specific product card element
//  and saves it as 'card.png'.

const { test, expect } = require('@playwright/test');

test('Q15: Screenshots', async ({ page }) => {
    await page.goto('https://books.toscrape.com', { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: 'screenshots/products.png' }); //whole page screenshot
    await page.locator('.product_pod').first().screenshot({ path: 'screenshots/card.png' }); //screenshot of the first product card element
});