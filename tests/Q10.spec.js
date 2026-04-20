// Q10  File Upload/Download
// Write a Playwright script that clicks a Download button, waits for the file download to complete,
// and then asserts that the downloaded file exists and its filename matches the expected value.

const { test, expect } = require('@playwright/test');
const fs = require('fs'); //Node.js built-in — used here to check if a file exists on disk
const path = require('path'); //Node.js built-in — used to safely construct file paths across OS

test('Q10: File Download', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  // Step 1: Wait for download (BEFORE click)
  //  waitForEvent('download') returns a Promise that resolves when a download is triggered
  // It must be set up BEFORE the click — if you click first, the download event fires instantly and you'll miss it (race condition)
  const downloadPromise = page.waitForEvent('download');

  // Step 2: Click on file
  await page.getByRole('link', { name: 'random_data.txt' }).click();

  // Step 3: Capture download
  // Now we await the promise set up earlier
  // Once the download starts, Playwright intercepts it and resolves the promise with a Download object
  // This object contains metadata and methods to work with the downloaded file
  const download = await downloadPromise;

  // Step 4: Get filename
  const fileName = download.suggestedFilename(); //returns the filename the browser would have saved

  // Step 5: Save file
  //   __dirname is a Node.js global that holds the absolute path of the current script's directory
  //path.join combine it.
  const filePath = path.join(__dirname, fileName);
  await download.saveAs(filePath); 
  //Playwright holds the downloaded file in a temporary location by default
  // saveAs(filePath) copies it to your specified path
  // Without this step, the file disappears after the test ends

  // Step 6: Assertions
  await expect(fileName).toBe('random_data.txt'); // filename check
  await expect(fs.existsSync(filePath)).toBeTruthy(); // file exists check
});
