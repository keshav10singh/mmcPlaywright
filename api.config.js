import { defineConfig,devices }from '@playwright/test';
import { name } from './playwright.config';

export default defineConfig({
    timeout:60000,
    fullyParallel:'true',
    reporter:'html',
    retries: process.env.CI? 1:0,
    testDir:'tests/api',
    use :{
        headless: true,
        viewport:{width: 1440,height: 920},
        video: 'off',
        actionTimeout: 15000,
        video:'retain-on-failure',
        screenshot:'off'
       // baseURL:'https://reqres.in/api/'
    },

    project:{
        name: 'Chrome',
        use:{
            ...devices['Pixel 2 XL'],
            
        },
        name: 'Firefox',
        use:{
            browserName:'firefox'
        },
        

        
    }

});