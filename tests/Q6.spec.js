// Q6  Form Interactions
// Write a Playwright script that locates a group of radio buttons on a page, 
// selects one specific radio button by clicking it, and then asserts that it is the selected option.

const {test,expect} = require("@playwright/test");

test("Q6: Radio button validation",async ({page}) => {
    await page.goto("https://demoqa.com/radio-button");
    await expect(page).toHaveURL("https://demoqa.com/radio-button");

    const radiobtn = page.locator("#impressiveRadio");
    await radiobtn.check();

    await expect(radiobtn).toBeChecked();
    const result = radiobtn.isChecked();
    await expect(result).toBeTruthy();
});