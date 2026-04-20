// Q1  User Actions
// Write a Playwright script that opens a browser, navigates to a demo login page,
// finds the username and password input fields, types credentials into them, 
// and clicks the Login button.

// const {test,expect} = require("@playwright/test");
import { test, expect } from '@playwright/test';

test("Q1: User Actions Login validation", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");

    // const userName = page.getByRole("textbox",{name:"Username"});
    const userName = page.locator("input[name='username']");
    await userName.fill("tomsmith");

    // const password = page.getByRole("textbox",{name:"Password"});
    const password = page.locator("input[name='password']");
    await password.fill("SuperSecretPassword!");

    const submitbtn = page.getByRole("button",{name:"Login"});
    await submitbtn.click();

    const sucess = page.locator("div[id='flash']");
    await expect(sucess).toContainText("You logged into a secure area!");

    await page.close();
});

