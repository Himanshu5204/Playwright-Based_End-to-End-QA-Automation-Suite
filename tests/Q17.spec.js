// Q17  Alerts & Dialogs
// Write a Playwright script that clicks a button which triggers a JavaScript alert popup,
// listens for the dialog event, accepts the alert, and then asserts that the correct message 
// was shown in the alert.

const { test, expect } = require('@playwright/test');

test('Q17: Handling Alerts', async ({ page }) => {
	await page.goto('https://the-internet.herokuapp.com/javascript_alerts', { waitUntil: 'domcontentloaded' });
	await expect(page).toHaveURL('https://the-internet.herokuapp.com/javascript_alerts');

	let alertMessage = '';
    //page.once listens for the next occurrence of the specified event, in this case 'dialog', and then executes the provided callback function when that event occurs. This is useful for handling JavaScript alerts, confirms, and prompts that may appear during the test.
    //page.on listens for every occurrence of the specified event, meaning that if multiple dialogs appear during the test, the callback function will be executed for each one. This is useful when you expect multiple dialogs to appear and want to handle them all in a consistent way.
	page.on('dialog', async (dialog) => {
		alertMessage = dialog.message();
		await dialog.accept();
	});

	await page.getByRole('button', { name: 'Click for JS Alert' }).click();

	await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
	await expect(alertMessage).toBe('I am a JS Alert');

});


