// Q3  Form Interactions
// Write a Playwright script that navigates to a registration form, fills in the First Name, 
// Last Name, and Email fields, then submits the form and verifies a success message is displayed.

import { test, expect } from "@playwright/test";

test("Q3: Registration form validation",async({page})=>{
    await page.goto("https://demoqa.com/text-box");
    await expect(page).toHaveURL("https://demoqa.com/text-box");

    const userName = page.locator("#userName");
    await userName.type("Himanshu",{delay:100});

    const email = page.locator("#userEmail");
    await email.fill("abc@gmail.com");

    const address = page.locator("#currentAddress");
    await address.click();
    // await page.fill("#currentAddress", "odhav ahemdabad");
    await page.keyboard.type("odhav ahemdabad");

    const paddress = page.locator("#permanentAddress");
    await paddress.click();
    await page.keyboard.type("odhav ahemdabad 382415");

    const submitbtn = page.getByRole("button",{name:"Submit"});
    await submitbtn.scrollIntoViewIfNeeded();
    await submitbtn.click();

    await expect(page.locator("#output")).toBeVisible();
    await page.pause();
});