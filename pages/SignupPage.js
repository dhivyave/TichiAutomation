class SignupPage {

    constructor(page) {

        this.page = page;

        // Home Page
        this.signInButton = page.getByRole('button', { name: 'Sign In' });

        // Email Page
        this.emailTextBox = page.getByRole('textbox', { name: 'Email Address *' });

        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });

        // Registration Page
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name *' });

        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });

        this.mobileNumberTextBox = page.getByRole('textbox', { name: 'Mobile Number' });

        this.passwordTextBox = page.getByRole('textbox', {
            name: 'Password *',
            exact: true
        });

        this.confirmPasswordTextBox = page.getByRole('textbox', {
            name: 'Confirm Password *'
        });

        // Checkboxes
        this.termsCheckbox = page.locator('#remember');

        this.privacyCheckbox = page.locator('input[type="checkbox"]').nth(1);

        // Sign Up Button
        this.signupButton = page.getByRole('button', {
            name: 'Sign Up',
            exact: true
        });

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

    async enterFirstName(firstName) {
        await this.firstNameTextBox.waitFor();
        await this.firstNameTextBox.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameTextBox.fill(lastName);
    }

    async enterMobileNumber(mobile) {
        await this.mobileNumberTextBox.fill(mobile);
    }

    async enterPassword(password) {
        await this.passwordTextBox.fill(password);
    }

    async enterConfirmPassword(confirmPassword) {
        await this.confirmPasswordTextBox.fill(confirmPassword);
    }

    async acceptTerms() {
        await this.termsCheckbox.check();
    }

    async acceptPrivacyPolicy() {
        await this.privacyCheckbox.check();
    }

    async clickSignup() {
        await this.signupButton.click();
    }

    // Reusable Signup Method
    async signup(email, firstName, lastName, mobile, password, confirmPassword) {

        await this.openWebsite();

        await this.clickSignIn();

        await this.enterEmail(email);

        await this.clickContinue();

        await this.enterFirstName(firstName);

        await this.enterLastName(lastName);

        await this.enterMobileNumber(mobile);

        await this.enterPassword(password);

        await this.enterConfirmPassword(confirmPassword);

        await this.acceptTerms();

        await this.acceptPrivacyPolicy();

        await this.clickSignup();
    }

}

module.exports = SignupPage;