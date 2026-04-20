// Q19  Form Automation
// Write a complete Playwright form automation test suite that: 
// (1) opens a student registration form, 
// (2) fills in all fields including name, email, gender radio button, date of birth, subject, and address, 
// (3) submits the form, and 
// (4) verifies the submitted data in the confirmation popup table.

const { test, expect } = require('@playwright/test');

test('Q19: Student Registration Form Automation', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    // await page.pause(); 
    const student = {
        firstName: 'Himanshu',
        lastName: 'Shah',
        email: 'himanshu.shah@example.com',
        mobile: '9876543210',
        dateOfBirth: '15 Aug 1998',
        subject: 'Maths',
        address: 'Ahmedabad, Gujarat'
    };

    await page.getByPlaceholder('First Name').fill(student.firstName);
    await page.getByPlaceholder('Last Name').fill(student.lastName);
    await page.locator('#userEmail').fill(student.email);

    await page.locator('label[for="gender-radio-1"]').click();

    await page.locator('#userNumber').fill(student.mobile);

    await page.locator('#dateOfBirthInput').click();
    await page.locator('#dateOfBirthInput').fill(student.dateOfBirth);
    await page.locator('#dateOfBirthInput').press('Enter');

    await page.locator('#subjectsInput').fill(student.subject);
    await page.locator('#subjectsInput').press('Enter');

    await page.locator('#currentAddress').fill(student.address);

    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.locator('#submit').click();

    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');

    const assertRowValue = async (rowLabel, expectedValue) => {
        const row = page.locator('.table-responsive tr', { hasText: rowLabel });
        await expect(row.locator('td').nth(1)).toHaveText(expectedValue);
    };

    await assertRowValue('Student Name', `${student.firstName} ${student.lastName}`);
    await assertRowValue('Student Email', student.email);
    await assertRowValue('Gender', 'Male');
    await assertRowValue('Mobile', student.mobile);
    await assertRowValue('Date of Birth', '15 August,1998');
    await assertRowValue('Subjects', student.subject);
    await assertRowValue('Address', student.address);
});