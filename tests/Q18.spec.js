// Q18  Alerts & Dialogs
// Write a Playwright script that triggers a JavaScript confirm popup, 
// dismisses it (clicks Cancel), and then asserts that the page shows a message
// indicating the user clicked Cancel.

const { test, expect } = require('@playwright/test');

test('Q18: Handling Confirm Dialogs', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');

    let confirmMessage = '';
    page.on('dialog', async (dialog) => {
        confirmMessage = dialog.message();
        await dialog.dismiss(); // Dismiss the confirm dialog (click Cancel)
    });

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    await expect(confirmMessage).toBe('I am a JS Confirm');
});

