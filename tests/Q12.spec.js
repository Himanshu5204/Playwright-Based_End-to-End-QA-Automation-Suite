// Q12  Assertions
// Write a Playwright script that navigates to a page with a counter, 
// clicks the increment button 3 times, 
// and then asserts that the counter displays the value '3'.

const { test, expect } = require('@playwright/test');

test('Q12: Counter Increment', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await expect(page).toHaveURL('https://demo.playwright.dev/todomvc/#/');

    const iputField = page.locator('.new-todo'); 
    for (let i = 0; i < 3; i++) {
        await iputField.fill(`Task ${i + 1}`);
        await page.keyboard.press('Enter');
    }
    // await page.pause();
    const checkcnt = page.getByTestId("todo-count");
    await expect(checkcnt).toHaveText('3 items left');
});