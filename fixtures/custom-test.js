import { test as base, expect as baseExpect } from '@playwright/test';


const test = base.extend({
  page: async ({ page }, use) => {
    page.on('request', (request) => {
      console.log(`[REQUEST] ${request.method()} ${request.url()}`); // Log all requests
    });

    page.on('response', async (response) => {
      const status = response.status();
      const url = response.url();
      if (status >= 400) {
        console.error(`[FAILED RESPONSE] ${status} - ${url}`); // Log error for 4xx and 5xx responses
      } else {
        console.log(`[RESPONSE] ${status} - ${url}`); // Log success for 2xx responses
      }
    });

    page.on('requestfailed', (request) => {
      console.error(`[FAILED REQUEST] ${request.failure().errorText} - ${request.url()}`); // Log failed requests
    });

    await use(page);
  }
});

export { test, baseExpect as expect };
