import {test, expect, Browser, Page ,Locator ,BrowserContext} from '@playwright/test'
import { webkit,chromium,firefox } from 'playwright'

test('auth test', async ({ page, context })=>{
    //const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    //const context:BrowserContext = await browser.newContext();
    //const page:Page = await context.newPage();

    const username='omp-uat';
    const password='v74fWCYPu4@oy7xCEEwJ6t@Y';
    const authHeader ='Basic ' + btoa(username +':'+ password);
   // await page.setExtraHTTPHeaders({Authorization : authHeader}); // To run using authHeader Variable
    await page.setExtraHTTPHeaders({Authorization : createAuthHeader(username,password)}); 
   // To run using authHeader function
    await page.goto('https://ca.uat.mipulse.co/en');
})

test('auth test using env ', async ({ page, context })=>{
    //const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    //const context:BrowserContext = await browser.newContext();
    //const page:Page = await context.newPage();

    let username= process.env.username;
    let password= process.env.password;
    //const authHeader ='Basic ' + btoa(username +':'+ password);
   // await page.setExtraHTTPHeaders({Authorization : authHeader}); // To run using authHeader Variable
    await page.setExtraHTTPHeaders({Authorization : createAuthHeader(username,password)}); 
   // To run using authHeader function
    await page.goto('https://ca.uat.mipulse.co/en');
})

function createAuthHeader(username,password){
    return 'Basic ' + btoa(username +':'+ password);
}
// this script is working, to run this use command npx playwright test auth.spec.js --ui OR 
// in Headless mode  npx playwright test auth.spec.js 