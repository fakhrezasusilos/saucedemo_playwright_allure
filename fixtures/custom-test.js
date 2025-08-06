import { test as base, expect as baseExpect } from '@playwright/test';

//Custom fixture for logging requests and responses on the page
const test = base.extend({
  page: async ({ page }, use) => {
    page.on('request', (request) => {
      console.log(`[REQUEST] ${request.method()} ${request.url()}`);
    });

    page.on('response', async (response) => {
      const status = response.status();
      const url = response.url();
      if (status >= 400) {
        console.error(`[FAILED RESPONSE] ${status} - ${url}`);
      } else {
        console.log(`[RESPONSE] ${status} - ${url}`);
      }
    });

    page.on('requestfailed', (request) => {
      console.error(`[FAILED REQUEST] ${request.failure().errorText} - ${request.url()}`);
    });

    await use(page);
  }
});

export { test, baseExpect as expect };
