// Q13  Waiting Strategies
// Write a Playwright script that clicks a button that triggers a delayed element to appear 
// on the page (e.g., after 2 seconds), uses waitForSelector to wait for the element,
//  then asserts it is visible.

const { test, expect } = require('@playwright/test');

test('Q13: Waiting for delayed element', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_loading/1");

    const startButton = page.getByRole('button', { name: 'Start' });
    await startButton.click();

    await page.waitForSelector('#finish'); // Waits for the element with id 'finish' to appear in the DOM

    await expect(page.locator('#finish')).toBeVisible({ timeout: 10000 }); // Asserts that the element is visible
    
    // Wait for the delayed element to appear
    // const delayedElement = page.locator('#finish');
    // await delayedElement.waitFor(); // Waits for the element to be present in the DOM

    // Assert that the delayed element is visible
    // await expect(delayedElement).toBeVisible();

});