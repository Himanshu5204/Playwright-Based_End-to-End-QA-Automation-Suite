// Q2  User Actions
// Write a Playwright script that hovers over a menu item on a webpage so that a hidden dropdown 
// appears, then clicks one of the links inside the dropdown.

const {test,expect} = require("@playwright/test");

test("Q2: Check Hover Effect",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/hovers");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/hovers");

    const hoverimg = page.locator("//div[@class='example']//div[1]//img[1]");
    await hoverimg.hover();

    const clickLink = page.getByRole("link",{name:"View profile"});
    await clickLink.click();

    const checkURL = page.url();
    await expect(checkURL).toBe("https://the-internet.herokuapp.com/users/1");

    await page.close();
});