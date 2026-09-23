# SauceDemo Playwright Framework

This project is a Playwright-based UI automation framework for testing the SauceDemo e-commerce website. It follows the Page Object Model (POM) pattern and covers an end-to-end purchase flow using browser automation.

## Tech Stack

- JavaScript
- Playwright Test
- Node.js
- Page Object Model design

## Project Structure

```text
.
├── data/
├── fixtures/
│   └── myfixture.js
├── pages/
│   ├── basePage.js
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── loginPage.js
│   ├── ordersummaryPage.js
│   └── productPage.js
├── tests/
│   └── productPage.spec.js
├── utils/
├── .gitignore
├── package.json
├── playwright.config.js
├── playwright-report/
├── test-results/
└── README.md
```

## Features

- Login flow automation for SauceDemo
- Product sorting and selection
- Add to cart validation
- Cart product count and pricing checks
- Checkout details handling
- Playwright HTML reporting

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (recommended LTS version)
- npm

## Installation

1. Open a terminal in the project root.
2. Install dependencies:

```bash
npm install
```

## Running Tests

This project does not define custom npm scripts, so use Playwright commands directly:

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/productPage.spec.js
```

Run in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run a specific browser project (currently configured for Chromium):

```bash
npx playwright test --project=chromium
```

## Reports

Playwright is configured to generate an HTML report. To open the report after execution:

```bash
npx playwright show-report
```

## Configuration

The test configuration is defined in `playwright.config.js`.

Key settings:

- Test directory: `./tests`
- Browser project: Chromium
- HTML reporter enabled
- Trace collection on first retry

## Test Flow

The main end-to-end flow is implemented in `tests/productPage.spec.js` and includes:

1. Open SauceDemo website
2. Login with valid credentials
3. Sort products
4. Add a product to the cart
5. Open cart and validate item details
6. Proceed to checkout
7. Enter checkout information

## Notes

- This project uses the Page Object Model pattern to keep test logic separate from page interactions.
- Page classes live under the `pages/` directory and handle element locators and actions.
- Test results and execution reports are stored in `test-results/` and `playwright-report/`.

## Author

This framework is built for automated testing of the SauceDemo demo site.
