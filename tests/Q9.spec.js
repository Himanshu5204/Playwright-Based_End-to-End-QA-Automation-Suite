// Q9  File Upload/Download
// Write a Playwright script that locates a file upload input on a page, 
// uses setInputFiles() to attach a local file, submits the form, and 
// verifies that the uploaded filename is shown on the page.

const {test,expect} = require("@playwright/test");

test('Q9: File Upload', async({page}) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/upload");
  await page.pause();
  const fileInput = page.locator('#file-upload');
  await fileInput.click();
  await fileInput.setInputFiles("C:\\Bacancy\\QA-Trainee\\Dev shah\\installation_guide.docx");

  const fileUploadbtn = page.getByRole("button",{name:"Upload"});
  await fileUploadbtn.click();

  const ckFileUploaded = page.locator("#uploaded-files");
  await expect(ckFileUploaded).toHaveText("installation_guide.docx");

})
