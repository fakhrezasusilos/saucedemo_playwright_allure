
# Saucedemo Automation with Playwright and Allure

This project demonstrates automated end-to-end testing for the [SauceDemo](https://www.saucedemo.com/) website using **Playwright** with **JavaScript**, and generates detailed test reports using **Allure Reporter**.

## 🔧 Tech Stack

- **Automation Tool:** Playwright
- **Language:** JavaScript (Node.js)
- **Test Runner:** Playwright Test
- **Reporting:** Allure Report
- **Assertion Library:** Built-in Playwright expect

## 📁 Project Structure

```
📂 tests/                  # Test specs
📂 locator/                # Page element locators (Page Object Model)
📂 functionality/          # Page functionalities (Page Object Model)
.env                      # Environment variables
playwright.config.js      # Playwright configuration
```

## ✅ Test Scenarios

- Login with valid and invalid users
- Add/remove items to/from the cart
- Checkout process and order completion
- UI validations and assertions

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/fakhrezasusilos/saucedemo_playwright_allure.git
cd saucedemo_playwright_allure
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npx playwright test
```

4. Generate and open Allure report:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

> Ensure Allure is installed globally or use it via `npx`:
```bash
npm install -g allure-commandline --save-dev
```

## 📸 Sample Report

Allure report includes:
- Passed/failed tests
- Step-by-step execution logs
- Screenshots on failure

## 🧑‍💻 Author

**Fakhreza Susilo**  
QA Engineer | Manual & Automation | Web & Mobile Apps  
[GitHub](https://github.com/fakhrezasusilos)

---

Feel free to contribute or suggest improvements!
