import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'chromium', // or 'firefox', 'webkit'
    headless: false,         // Set to true for headless mode
    baseURL: 'https://app.respond.io/',
    video: 'on',
  },
  reporter: [['html', { open: 'never' }]],
  timeout: 60000,
};

export default config;