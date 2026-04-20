// Q4  Form Interactions
// Write a Playwright script that finds a checkbox on a page, clicks it to check it,
// asserts it is checked, then clicks it again to uncheck it and asserts it is unchecked.

const {test,expect} =require("@playwright/test");

test("Q4: Checkbox check and uncheck validation",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/checkboxes");
    // await page.pause();
    // const checkbox1 = page.locator("input[type='checkbox']").nth(0);
    // const checkbox2 = page.locator("input[type='checkbox']").nth(1);
    // await checkbox1.check();
    // await checkbox2.uncheck();

    // const ckbx1 = page.getByRole("checkbox",{name:" checkbox 1"}); //label not associated so not woprk
    const ckbx1 = page.locator("input[type='checkbox']").first();
    await ckbx1.check();

    await expect(ckbx1).toBeChecked();

    await ckbx1.uncheck();
    await expect(ckbx1).not.toBeChecked();

    
});