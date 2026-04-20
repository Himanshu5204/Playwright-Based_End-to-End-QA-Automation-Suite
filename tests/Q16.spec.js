// Q16  Screenshots & Videos
// Write a Playwright script configured to record a video of the entire test run. 
// The script should fill a form and submit it.
//  After the test, verify that a video file was created in the output folder.

const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.use({ video: 'on' });

test('Q16: Video Recording', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await expect(page).toHaveURL('https://demoqa.com/text-box');

    await page.getByPlaceholder('Full Name').fill('Dev Shah');
    await page.getByPlaceholder('name@example.com').fill('dev.shah@example.com');
    await page.locator('#currentAddress').fill('Ahmedabad, Gujarat');
    await page.locator('#permanentAddress').fill('Ahmedabad, Gujarat');

    await page.locator('#submit').click();
    await expect(page.locator('#output')).toBeVisible();

    const video = page.video();
    expect(video).not.toBeNull();

    await page.close();

    const videoPath = await video.path();
    expect(videoPath).toContain('test-results');
    expect(fs.existsSync(videoPath)).toBeTruthy();
    expect(fs.statSync(videoPath).size).toBeGreaterThan(0);

});