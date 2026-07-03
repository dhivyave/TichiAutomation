// // class LoginPage {

// //     constructor(page) {
// //         this.page = page;

// //         this.signInButton = page.getByRole('button', { name: 'Sign In' });

// //         this.email = page.locator('input[placeholder="Enter your email address"]');

// //         this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });

// //         this.password = page.locator('input[placeholder="Enter your password"]');

// //         this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
// //     }

// //     async openWebsite() {
// //         await this.page.goto("https://tichi-app-webapp-stage.web.app/");
// //     }

// //     async clickSignIn() {
// //         await this.signInButton.click();
// //     }

// //     async enterEmail(email) {
// //         await this.email.waitFor();
// //         await this.email.fill(email);
// //     }

// //     async clickContinue() {
// //         await this.continueButton.click();
// //     }

// //     async enterPassword(password) {
// //         await this.password.waitFor();
// //         await this.password.fill(password);
// //     }

// //     async clickLogin() {
// //         await this.loginButton.click();
// //     }

// // }

// // module.exports = LoginPage;




// const { test, expect } = require('@playwright/test');
// const LoginPage = require('../pages/LoginPage');
// const data = require('../utils/testData');

// test.describe('Tichi Login Tests', () => {

//   test('TC_LOGIN_001 - Valid Login', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(data.validEmail);
//     await login.clickContinue();
//     await login.enterPassword(data.validPassword);
//     await login.clickLogin();

//     await page.waitForLoadState('networkidle');
//     await expect(page).not.toHaveURL(/signin/i);
//   });

//   test('TC_LOGIN_002 - Invalid Password', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(data.validEmail);
//     await login.clickContinue();
//     await login.enterPassword(data.invalidPassword);
//     await login.clickLogin();

//     await expect(page.getByText(/invalid|incorrect|password/i)).toBeVisible();
//   });

//   test('TC_LOGIN_003 - Invalid Email', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail("invalid@gmail.com");
//     await login.clickContinue();

//     await expect(page.getByText(/not found|invalid|email/i)).toBeVisible();
//   });

//   test('TC_LOGIN_004 - Empty Email', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();

//     await page.getByRole('button', { name: 'Continue', exact: true }).click();

//     await expect(page.getByText(/email|required/i)).toBeVisible();
//   });

//   test('TC_LOGIN_005 - Empty Password', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(data.validEmail);
//     await login.clickContinue();

//     await page.getByRole('button', { name: 'Login', exact: true }).click();

//     await expect(page.getByText(/password|required/i)).toBeVisible();
//   });

//   test('TC_LOGIN_006 - Invalid Email Format', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail("abc@gmail");
//     await login.clickContinue();

//     await expect(page.getByText(/email/i)).toBeVisible();
//   });

//   test('TC_LOGIN_007 - Email with Leading Spaces', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail("   " + data.validEmail);
//     await login.clickContinue();

//     await expect(page).toHaveURL(/.*/);
//   });

//   test('TC_LOGIN_008 - Email with Trailing Spaces', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(data.validEmail + "   ");
//     await login.clickContinue();

//     await expect(page).toHaveURL(/.*/);
//   });

//   test('TC_LOGIN_009 - Password with Spaces', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(data.validEmail);
//     await login.clickContinue();
//     await login.enterPassword(" " + data.validPassword + " ");
//     await login.clickLogin();

//     await expect(page.getByText(/invalid|password/i)).toBeVisible();
//   });

//   test('TC_LOGIN_010 - Very Long Email', async ({ page }) => {
//     const login = new LoginPage(page);

//     const longEmail =
//       "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com";

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(longEmail);
//     await login.clickContinue();

//     await expect(page).toHaveURL(/.*/);
//   });

//   test('TC_LOGIN_011 - Refresh Before Login', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await page.reload();

//     await expect(page).toHaveTitle(/Tichi/i);
//   });

//   test('TC_LOGIN_012 - Verify Password Masking', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.openWebsite();
//     await login.clickSignIn();
//     await login.enterEmail(data.validEmail);
//     await login.clickContinue();

//     await expect(page.locator('input[type="password"]')).toBeVisible();
//   });

// });


class LoginPage {

    constructor(page) {

        this.page = page;

        this.signInButton = page.getByRole('button', { name: 'Sign In' });

        this.emailTextBox = page.locator('input[placeholder="Enter your email address"]');

        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });

        this.passwordTextBox = page.locator('input[placeholder="Enter your password"]');

        this.loginButton = page.getByRole('button', { name: 'Login', exact: true });

    }

    async openWebsite() {
        await this.page.goto("https://tichi-app-webapp-stage.web.app/");
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async enterEmail(email) {
        await this.emailTextBox.waitFor();
        await this.emailTextBox.fill(email);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async enterPassword(password) {
        await this.passwordTextBox.waitFor();
        await this.passwordTextBox.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    // Reusable login method
    async login(email, password) {

        await this.openWebsite();

        await this.clickSignIn();

        await this.enterEmail(email);

        await this.clickContinue();

        await this.enterPassword(password);

        await this.clickLogin();
    }

}

module.exports = LoginPage;