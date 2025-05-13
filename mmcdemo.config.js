import { defineConfig,devices }from '@playwright/test';
import { name } from './playwright.config';
import dotenv from 'dotenv';
import path from 'path';

if(!process.env.NODE_ENV){
    // Read from ".env" file.
   require('dotenv').config({ path:`${__dirname}//config//.env`});
}
else{
    require('dotenv').config({ path:`${__dirname}//config//.env.${process.env.NODE_ENV}`});
}

export default defineConfig({
    //timeout:600000,
    use: {
        actionTimeout: 30 * 1000,
        navigationTimeout: 30 * 1000,
      },
    fullyParallel:'true',
    reporter:'html',
    retries: process.env.CI? 1:0,
    reporter: [
        ['allure-playwright']
    ],
    testDir:'tests/mmc',
    use :{
        headless: true,
        viewport:{width: 1440,height: 920},
        video: process.env.CI ? 'on-first-retry' : 'off',
        actionTimeout: 50000,
        video:'retain-on-failure',
        screenshot:'off'
    },

    project:{
  
        name: 'Chrome',
        use:{
            ...devices['Pixel 2 XL'],
            
        },
        name: 'Firefox',
        use:{
            browserName:'firefox',
        },

      /*  name: 'uat',
      use: {
        baseURL: 'https://author.uat.mipulse.co/aem/start.html',
      },

      name: 'prod',
      use: {
        baseURL: 'https://author.prod.mipulse.co/aem/start.html',
      }, */
        
    }

});