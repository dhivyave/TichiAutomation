// const { test, expect } = require('@playwright/test');

// test('Valid Login Test', async ({ page }) => {

//   // Open Website
//   await page.goto('https://tichi-app-webapp-stage.web.app/');

//   // Click Sign In
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Wait for Email field
//   await page.waitForSelector('input[placeholder="Enter your email address"]');

//   // Enter Email
//   await page.locator('input[placeholder="Enter your email address"]')
//     .fill('dhivyavenkat2005@gmail.com');

//   // Click Continue (purple button)
//   await page.getByRole('button', { name: 'Continue', exact: true }).click();

//   // Wait for Password field
//   await page.waitForSelector('input[placeholder="Enter your password"]');

//   // Enter Password
//   await page.locator('input[placeholder="Enter your password"]')
//     .fill('Dhivya@1234');

//   // Click Login
//   await page.getByRole('button', { name: 'Login', exact: true }).click();

//   // Wait for page to load after login
//   await page.waitForLoadState('networkidle');

//   // Verify successful login
//   await expect(page).not.toHaveURL(/signin/i);

// });



// const { test, expect } = require('@playwright/test');

// // Common function to open Sign In page
// async function openLogin(page) {
//     await page.goto('https://tichi-app-webapp-stage.web.app/');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.waitForSelector('input[placeholder="Enter your email address"]');
// }

// // TC_LOGIN_001
// test('TC_LOGIN_001 - Valid Login', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('dhivyavenkat2005@gmail.com');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForSelector('input[placeholder="Enter your password"]');

//     await page.locator('input[placeholder="Enter your password"]')
//         .fill('Dhivya@1234');

//     await page.getByRole('button', { name: 'Login', exact: true }).click();

//     await page.waitForTimeout(3000);
// });

// // TC_LOGIN_002
// test('TC_LOGIN_002 - Invalid Password', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('dhivyavenkat2005@gmail.com');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForSelector('input[placeholder="Enter your password"]');

//     await page.locator('input[placeholder="Enter your password"]')
//         .fill('Dhivya@999');

//     await page.getByRole('button', { name: 'Login', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_003
// test('TC_LOGIN_003 - Empty Email', async ({ page }) => {

//     await openLogin(page);

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_004
// test('TC_LOGIN_004 - Invalid Email Format', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('abc@gmail');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_005
// test('TC_LOGIN_005 - Invalid Email', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('notregistered@gmail.com');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_006
// test('TC_LOGIN_006 - Empty Password', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('dhivyavenkat2005@gmail.com');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForSelector('input[placeholder="Enter your password"]');

//     await page.getByRole('button', { name: 'Login', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_007
// test('TC_LOGIN_007 - Wrong Email and Password', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('wrong@gmail.com');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_008
// test('TC_LOGIN_008 - Email with Leading Spaces', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('   dhivyavenkat2005@gmail.com');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_009
// test('TC_LOGIN_009 - Email with Trailing Spaces', async ({ page }) => {

//     await openLogin(page);

//     await page.locator('input[placeholder="Enter your email address"]')
//         .fill('dhivyavenkat2005@gmail.com   ');

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await page.waitForTimeout(2000);
// });

// // TC_LOGIN_010
// test('TC_LOGIN_010 - Refresh Login Page', async ({ page }) => {

//     await openLogin(page);

//     await page.reload();

//     await page.waitForTimeout(2000);
// });



const { test, expect } = require('@playwright/test');

// Open Login Page
async function openLogin(page) {
    await page.goto('https://tichi-app-webapp-stage.web.app/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForSelector('input[placeholder="Enter your email address"]');
}

// ===============================
// TC_LOGIN_001 - Valid Login
// ===============================
test('TC_LOGIN_001 - Valid Login', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('dhivyavenkat2005@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForSelector('input[placeholder="Enter your password"]');

    await page.locator('input[placeholder="Enter your password"]')
        .fill('Dhivya@1234');

    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await page.waitForTimeout(3000);

    await expect(page).not.toHaveURL(/signin/i);

});

// ===============================
// TC_LOGIN_002 - Invalid Password
// ===============================
test('TC_LOGIN_002 - Invalid Password', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('dhivyavenkat2005@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForSelector('input[placeholder="Enter your password"]');

    await page.locator('input[placeholder="Enter your password"]')
        .fill('Dhivya@999');

   await page.getByRole('button', { name: 'Login', exact: true }).click({ force: true });

// Wait for response
await page.waitForTimeout(3000);

// Verify the user is still on the login page
await expect(
    page.locator('input[placeholder="Enter your password"]')
).toBeVisible();

});

// ===============================
// TC_LOGIN_003 - Empty Email
// ===============================
test('TC_LOGIN_003 - Empty Email', async ({ page }) => {

    await openLogin(page);

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await expect(page.locator('input[placeholder="Enter your email address"]')).toBeVisible();

});

// ===============================
// TC_LOGIN_004 - Invalid Email Format
// ===============================
test('TC_LOGIN_004 - Invalid Email Format', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('abc@gmail');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForTimeout(2000);

});

// ===============================
// TC_LOGIN_005 - Unregistered Email
// ===============================
test('TC_LOGIN_005 - Unregistered Email', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('notregistered@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForTimeout(2000);

});

// ===============================
// TC_LOGIN_006 - Empty Password
// ===============================
test('TC_LOGIN_006 - Empty Password', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('dhivyavenkat2005@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForSelector('input[placeholder="Enter your password"]');

    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await page.waitForTimeout(2000);

});

// ===============================
// TC_LOGIN_007 - Email with Leading Spaces
// ===============================
test('TC_LOGIN_007 - Email with Leading Spaces', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('   dhivyavenkat2005@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForTimeout(2000);

});

// ===============================
// TC_LOGIN_008 - Email with Trailing Spaces
// ===============================
test('TC_LOGIN_008 - Email with Trailing Spaces', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('dhivyavenkat2005@gmail.com   ');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForTimeout(2000);

});

// ===============================
// TC_LOGIN_009 - Refresh Login Page
// ===============================
// ===============================
// TC_LOGIN_009 - Refresh Login Page
// ===============================
test('TC_LOGIN_009 - Refresh Login Page', async ({ page }) => {

    await openLogin(page);

    // Refresh the current login page
    await page.reload();

    // Wait until the email field is available again
    await page.waitForSelector('input[placeholder="Enter your email address"]');

    // Verify the email field is visible
    await expect(
        page.locator('input[placeholder="Enter your email address"]')
    ).toBeVisible();

});

// ===============================
// TC_LOGIN_010 - Password Field Masking
// ===============================
test('TC_LOGIN_010 - Password Masking', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('dhivyavenkat2005@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    const password = page.locator('input[placeholder="Enter your password"]');

    await password.waitFor();

    await expect(password).toHaveAttribute('type', 'password');

});

// ===============================
// TC_LOGIN_011 - Show Password Icon Visible
// ===============================
test('TC_LOGIN_011 - Verify Show Password Icon', async ({ page }) => {

    await openLogin(page);

    await page.locator('input[placeholder="Enter your email address"]')
        .fill('dhivyavenkat2005@gmail.com');

    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForSelector('input[placeholder="Enter your password"]');

    await expect(page.locator('svg')).toBeVisible();

});

// ===============================
// TC_LOGIN_012 - Verify Continue Button
// ===============================
test('TC_LOGIN_012 - Continue Button Visible', async ({ page }) => {

    await openLogin(page);

    await expect(
        page.getByRole('button', { name: 'Continue', exact: true })
    ).toBeVisible();

});