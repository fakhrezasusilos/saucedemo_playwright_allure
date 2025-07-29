import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  workers: 4, // Adjust based on your CPU
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
  },
  reporter: [
    ['list'], // optional console output
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        browserName: 'chromium',
        ...devices['iPhone 13'], // You can also use Pixel 5 or Galaxy S8
      },
    },
  ],
});
