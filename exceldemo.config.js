import { defineConfig,devices }from '@playwright/test';
import { name } from './playwright.config';

export default defineConfig({
    timeout:60000,
    fullyParallel:'true',
    reporter:'html',
    retries: process.env.CI? 1:0,
    reporter: [
        ['allure-playwright']
    ],
    testDir:'tests/exceltask',
    use :{
        headless: true,
        viewport:{width: 1440,height: 920},
        video: process.env.CI ? 'on-first-retry' : 'off',
        actionTimeout: 15000,
        video:'retain-on-failure',
        screenshot:'off'
    },

    project:{
      
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
          },
      
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
          },
      
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
          },
    }

});