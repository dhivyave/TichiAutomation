const { test, expect } = require('@playwright/test');

// Generate unique email
function generateEmail() {
    return `user${Date.now()}@gmail.com`;
}

// Open Signup Page
async function openSignup(page, email) {

    await page.goto('https://tichi-app-webapp-stage.web.app/');

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('textbox', { name: 'Email Address *' }).fill(email);

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

}

// =====================================================
// TC_SIGNUP_001 - Valid Signup
// =====================================================
test('TC_SIGNUP_001 - Valid Signup', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');

    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Dhivya@1234');

    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Dhivya@1234');

    await page.locator('#remember').check();

    // await page.locator('input[type="checkbox"]').nth(1).check();

    await page.getByRole('button', { name: 'Sign Up' }).click();

    await page.waitForTimeout(3000);

});

// =====================================================
// TC_SIGNUP_002 - Empty First Name
// =====================================================
test('TC_SIGNUP_002 - Empty First Name', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');

    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Dhivya@1234');

    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Dhivya@1234');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_003 - Empty Last Name
// =====================================================
test('TC_SIGNUP_003 - Empty Last Name', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');

    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Dhivya@1234');

    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Dhivya@1234');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_004 - Empty Mobile Number
// =====================================================
test('TC_SIGNUP_004 - Empty Mobile Number', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Dhivya@1234');

    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Dhivya@1234');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_005 - Password Mismatch
// =====================================================
test('TC_SIGNUP_005 - Password Mismatch', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');

    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Dhivya@1234');

    await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Dhivya@999');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_006 - Empty Password
// =====================================================
test('TC_SIGNUP_006 - Empty Password', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_007 - Empty Confirm Password
// =====================================================
test('TC_SIGNUP_007 - Empty Confirm Password', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');

    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('Dhivya@1234');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_008 - Invalid Mobile Number
// =====================================================
test('TC_SIGNUP_008 - Invalid Mobile Number', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await page.getByRole('textbox', { name: 'First Name *' }).fill('Dhivya');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('V');

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('12345');

    await page.waitForTimeout(2000);

});

// =====================================================
// TC_SIGNUP_009 - Refresh Signup Page
// =====================================================
test('TC_SIGNUP_009 - Verify Email Auto-filled', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await expect(
        page.getByRole('textbox', { name: 'Email Address *' })
    ).toHaveValue(email);

});

// =====================================================
// TC_SIGNUP_010 - Password Masking
// =====================================================
test('TC_SIGNUP_010 - Password Masking', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    const password = page.getByRole('textbox', { name: 'Password *', exact: true });

    await expect(password).toHaveAttribute('type', 'password');

});

// =====================================================
// TC_SIGNUP_011 - Sign Up Button Visible
// =====================================================
test('TC_SIGNUP_011 - Verify Sign Up Button', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await expect(
        page.getByRole('button', { name: 'Sign Up' })
    ).toBeVisible();

});

// =====================================================
// TC_SIGNUP_012 - Terms Checkbox Visible
// =====================================================
test('TC_SIGNUP_012 - Terms Checkbox', async ({ page }) => {

    const email = generateEmail();

    await openSignup(page, email);

    await expect(
        page.locator('#remember')
    ).toBeVisible();

});