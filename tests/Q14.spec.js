// Q14  Waiting Strategies
// Write a Playwright script that navigates to a page, waits for the page to reach 'networkidle'
//  load state (meaning no active network requests), then checks that
//  a specific element on the page is visible.

// Navigate to a page, wait for 'networkidle', then verify a specific element is visible.

const { test, expect } = require('@playwright/test');

test('Q14: Wait for network idle and verify element visibility', async ({ page }) => {
	await page.goto('https://books.toscrape.com', { waitUntil: 'domcontentloaded' }); //domcontentloaded waits for the initial HTML document to be completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This allows the script to start interacting with the page sooner, while still ensuring that the basic structure of the page is ready.
	await page.waitForLoadState('networkidle'); //waits for all requests to finish

	await expect(page).toHaveURL('https://books.toscrape.com/');
	await expect(page.locator('.product_pod').first()).toBeVisible();
});

