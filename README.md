# Automation-report
# Automated Testing Documentation
1. Prerequisites
Before setting up and running tests, ensure you have the following installed:

Node.js (version 14.17.6 or higher recommended)
npm (Node Package Manager, version 6.14.15 or higher recommended)
Cypress (will be installed in the setup steps)
2. Project Setup
Clone the Repository:

If you haven't already cloned the repository, run:
bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install Dependencies:

Run the following command in the root of your project directory to install Cypress and other required packages:
bash
Copy code
npm install
Install Cypress-iframe Plugin (if using iframe interactions):

To handle iframe-based elements like reCAPTCHA, install the cypress-iframe plugin:
bash
Copy code
npm install -D cypress-iframe
Directory Structure:

Place test scripts under the cypress/e2e folder:
login_test.cy.js: Tests login functionality.
functional_test.cy.js: Tests adding items to the cart.
form_validation_test.cy.js: Tests chat support functionality and form validation.
ui_test.cy.js: Verifies UI elements on the main pages.
3. Running the Tests
Run All Tests
To run all tests in headless mode, execute:
bash
Copy code
npx cypress run
Run Tests in Interactive Mode
Launch Cypress in interactive mode (ideal for debugging):
bash
Copy code
npx cypress open
Select the test you want to run from the Cypress GUI.
4. Test Details
Test Cases
Login Test (login_test.cy.js)

Purpose: Verify login functionality.
Steps:
Enter username and password.
Attempt to interact with reCAPTCHA (if enabled).
Click on the "Login" button.
Note: Test currently does not handle reCAPTCHA solving.
Functional Test (functional_test.cy.js)

Purpose: Test adding an item to the shopping cart.
Steps:
Navigate to the product listing.
Click the "Add to Cart" button.
Note: Code for adding to cart is included, but further checkout steps are not implemented.
Form Validation Test (form_validation_test.cy.js)

Purpose: Verify chat support form functionality.
Steps:
Locate and open the chat support section.
Note: Only chat support code is written; full form validation code may need further implementation.
UI Test (ui_test.cy.js)

Purpose: Validate visibility and functionality of main UI elements on the homepage.
Steps: Verify the presence and visibility of icons, navigation links, and main buttons.
5. Custom HTML Report Generation
To generate a custom HTML report, you can use a reporting plugin like mochawesome:

Install Mochawesome:

bash
Copy code
npm install --save-dev mochawesome
Update Cypress Config:

In cypress.config.js, configure Cypress to use mochawesome:
javascript
Copy code
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
  },
});
Run Tests and Generate Report:

Run your tests to create the report:
bash
Copy code
npx cypress run
Access Report:

After running, the HTML report can be found in the cypress/reports folder.
6. Troubleshooting
Iframe Selector Errors: If you encounter multiple iframes, select the correct iframe using cy.get('iframe[src*="recaptcha"]:first').
Network Timeout Errors: Adjust the timeout configuration in test commands as needed.
