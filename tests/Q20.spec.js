// Q20  File Upload/Download
// Write a Playwright script that: (1) navigates to a file upload page,
//  (2) uploads an image file using drag-and-drop simulation, 
// (3) waits for a preview of the file to appear, and 
// (4) takes a screenshot of the preview element to confirm it loaded correctly.

const { test, expect } = require('@playwright/test');

test('Q20: File Upload with Drag-and-Drop Simulation', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL('https://demoqa.com/upload-download');
    await page.pause();
    // Simulate drag-and-drop upload
    const fileInput = await page.locator('#uploadFile');
    await fileInput.setInputFiles('C:\\Users\\HIMANSHU PRAJAPATI\\Pictures\\Screenshots\\Screenshot (1).png'); // Provide the path to your image file

    const uploadedFile = await page.locator('#uploadedFilePath');
    await expect(uploadedFile).toBeVisible();
    await expect(uploadedFile).toHaveText("C:\\fakepath\\Screenshot (1).png"); 
    await page.screenshot({ path: 'screenshots/file_upload_preview.png' });
    await page.locator('#uploadedFilePath').screenshot({ path: 'screenshots/file_upload_preview.png' });

    // Wait for the preview to appear 
    // await page.waitForSelector('#uploadedFile');

    // Take a screenshot of the preview
    // await page.screenshot({ path: 'file_upload_preview.png' });
});