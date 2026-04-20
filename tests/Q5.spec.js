// Q5  Form Interactions
// Write a Playwright script that selects a specific option from a dropdown menu 
// (e.g., selects 'Option 2') and then asserts that the correct option is now selected.

const {test,expect} = require("@playwright/test");

test("Q5: Dropdown option selection validation", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dropdown");
    await page.pause();
    //this dropdown has not have any name //no accessible name
    // const dropdown = page.getByRole("combobox",{name:"Please select an option"}); //not for custom dropdown
    // const dropdown = page.getByRole("combobox");
    const dropdown = page.locator("#dropdown");
    await dropdown.selectOption("2");

    await expect(dropdown).toHaveValue("2");

    const selectedOption = dropdown.locator("option:checked");
    await expect(selectedOption).toHaveText("Option 2");
    // await expect(dropdown).toHaveText("Option 2"); //it return whole dropdown so not correct way

    const text = await dropdown.locator("option:checked").textContent();
    expect(text.trim()).toBe("Option 2");
});