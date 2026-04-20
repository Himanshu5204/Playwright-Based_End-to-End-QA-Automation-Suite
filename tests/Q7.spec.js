// Q7  Keyboard & Mouse
// Write a Playwright script that clicks inside a text input field and 
// uses keyboard shortcuts — press Ctrl+A to select all text, 
// then press Delete to clear it, and finally type new text into the field.

const {test,expect} = require("@playwright/test");

test('Q7: Keyboard shortcuts', async({page}) => {
  await page.goto("https://demoqa.com/text-box");
  await expect(page).toHaveURL("https://demoqa.com/text-box");

//   await page.pause();
  const userName = page.locator("#userName");
  await userName.click();
  await page.keyboard.type("Himamnshu Prajapati");

  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
//await page.keyboard.press("Control+a");
// await page.locator("#userName").selectText();

  await page.keyboard.press("Delete");

  await page.keyboard.type("New Text Entered..!");
})
