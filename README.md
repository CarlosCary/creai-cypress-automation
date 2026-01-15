# Homepage Smoke Tests – CREAI

This project contains automated smoke tests for the public homepage of https://creai.mx.

The tests verify that the homepage loads correctly, key elements are visible, basic navigation works as expected, and a simple mobile viewport scenario is covered.

## Tool / Language Used

**Cypress (v14.5.4)**  
Cypress version 14.5.4 is used as the end-to-end testing framework to automate browser interactions and validate the behavior of the public homepage.

**JavaScript (ES6+)**  
The test suite is written in JavaScript using modern ES6+ syntax, executed in a Node.js environment.
## Dependencies

To run the tests locally, the following are required:

- Node.js (version 16 or higher recommended)
- npm

All project dependencies are defined in the `package.json` file.

## How to Run the Tests Locally

1. Install project dependencies:
```bash
npm install
```
2. Run tests using Cypress interactive mode:
```bash
npm run cy:open
```
3. Run tests in headless mode:
```bash
npm run cy:run
```
4. Run only desktop (smoke) tests
```bash
npx cypress run --spec "cypress/e2e/homePage/home.smoke.cy.js"
```
5. Run only mobile tests
```bash
npx cypress run --spec "cypress/e2e/homePage/home.mobile.cy.js"
```
