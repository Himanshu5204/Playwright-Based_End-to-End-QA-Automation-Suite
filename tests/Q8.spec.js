// Q8  Keyboard & Mouse
// Write a Playwright script that double-clicks a word in a text area to select it,
// then types a replacement word. Verify the text area now contains the replacement text.

const {test,expect} = require("@playwright/test");

test('Q7: Keyboard shortcuts', async({page}) => {
  await page.goto("https://demoqa.com/text-box");
  await expect(page).toHaveURL("https://demoqa.com/text-box");

//   await page.pause();
  const userName = page.locator("#userName");
  await userName.click();
  await page.keyboard.type("HimamnshuPrajapati");

  await userName.dblclick(); //   await page.dblclick("#userName");

  await page.keyboard.type("Replacement word");

//   await expect(userName).toHaveText("Replacement word"); //#userName ek input field hai (<input type="text">) Input me textContent nahi hota Isliye Received: "" aa raha hai
  await expect(userName).toHaveValue("Replacement word"); 
})

// Element Type	    Assertion
// <div>, <span>	toHaveText()
// <input>, <textarea>	toHaveValue()