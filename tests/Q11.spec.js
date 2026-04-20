// Q11  Assertions
// Write a Playwright script that navigates to a page, locates an element with a specific text, 
// and asserts that: 
// (a) the element is visible,
// (b) it contains the expected text, and 
// (c) it has a specific CSS class.

const { test, expect } = require('@playwright/test');

test('Q11: Assertions', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');
  await expect(page).toHaveURL('https://demoqa.com/elements');

    const targetElement = page.getByText('Text Box'); // Locate element by text
    await expect(targetElement).toBeVisible(); // Check if element is visible
    await expect(targetElement).toHaveText('Text Box'); // Check if element contains expected text
    await expect(targetElement).toHaveClass(/text/); // Check if element has specific CSS class (using regex for partial match)

});