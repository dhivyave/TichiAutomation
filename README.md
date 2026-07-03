# Tichi QA Automation Testing using Playwright

This project contains automated test scripts for the **Tichi Web Application** using **Playwright** with JavaScript.

## Project Overview

The project automates the following modules:

- Login Functionality
- Signup Functionality

The automation follows the **Page Object Model (POM)** design pattern for better code reusability and maintainability.

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Visual Studio Code

---

## Project Structure

```
TichiAutomation/
│
├── pages/
│   ├── LoginPage.js
│   └── SignupPage.js
│
├── tests/
│   ├── login.spec.js
│   └── signup.spec.js
│
├── utils/
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Test Coverage

### Login Test Cases

- Valid Login
- Invalid Password
- Empty Email
- Invalid Email Format
- Unregistered Email
- Empty Password
- Leading Spaces in Email
- Trailing Spaces in Email
- Refresh Login Page
- Password Masking
- Password Visibility Icon
- Continue Button Verification

**Total Login Test Cases: 12**

---

### Signup Test Cases

- Valid Signup
- Empty First Name
- Empty Last Name
- Empty Mobile Number
- Password Mismatch
- Empty Password
- Empty Confirm Password
- Invalid Mobile Number
- Verify Email Auto-filled
- Password Masking
- Verify Sign Up Button
- Verify Terms & Conditions Checkbox

**Total Signup Test Cases: 12**

---

## Total Automation

- Login Module : 12 Test Cases
- Signup Module : 12 Test Cases

**Total Automated Test Cases : 24**

---

## How to Install

Clone the repository

```bash
git clone https://github.com/your-username/TichiAutomation.git
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Run Tests

Run all tests

```bash
npx playwright test
```

Run Login Tests

```bash
npx playwright test tests/login.spec.js
```

Run Signup Tests

```bash
npx playwright test tests/signup.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Generate HTML Report

```bash
npx playwright show-report
```

---

## Design Pattern Used

- Page Object Model (POM)

---
## Project Documents

- 📄 **Manual Test Cases:** [Login-Signup.xlsx](./TestCases/Login-Signup.xlsx)

- 🐞 **Defect Report:** [QA_Defect_Reports.docx](./DefectReports/QA_Defect_Reports.docx)


## Author

**Dhivya V**

GitHub: https://github.com/dhivyave