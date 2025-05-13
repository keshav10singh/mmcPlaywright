const{test, expect}= require('@playwright/test');
const { default: SauceLab } = require('/Users/keshavsingh/Documents/PlaywrightProject/pagobjectSaucelab/SauceLab');

test.describe('Sauce lab login using page object',()=>{
    let sauceLab

    test.beforeEach('Open start URL', async ({ page }) => {
        sauceLab= new SauceLab(page);
        await sauceLab.visit();
    });

    test('SauceLab ErrorLogin Test', async ({page})=>{

        await sauceLab.trylogin('assss','addddd');
        await sauceLab.assertErrorLogin();
         await page.close();
     
     }) 

     test('SauceLab Login Test', async ({page})=>{

        await sauceLab.trylogin('standard_user','secret_sauce');
         await sauceLab.assertSuccessLogin();
     
     }) 
})