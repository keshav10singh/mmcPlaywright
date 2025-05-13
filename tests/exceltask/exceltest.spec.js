const{test, expect}= require('@playwright/test');
const fs = require('fs');
//const path = require('path');
//const { readExcelFile } = require('../utils/excelUtils');

test.describe('Excel Test',()=>{

    test.beforeEach('Open start URL', async ({ page },testInfo) => {
        testInfo.setTimeout(testInfo.timeout + 60000);
       await page.goto('https://author.prod.mipulse.co/assets.html/content/dam/mitsubishi-motors-ca/en/cars/outlander-phev/2025/models');

    });

    test.only('Login Success Test', async ({page})=>{
 
        await page.getByPlaceholder('User name').fill('Keshavs');
        await page.getByPlaceholder('Password', { exact: true }).fill('Keshavs@2022');
        await page.getByRole('button',{ name: 'Sign In' }).click();
        await expect(page.getByRole('heading', { name: 'Models' })).toBeVisible({ timeout: 100000 });
        
        // Extract the text from the elements
      const texts = await page.evaluate(() => {
       // Select all elements with the class 'foundation-collection-item-title'
        const elements = document.querySelectorAll('.foundation-collection-item-subtitle');
      //const elements = document.querySelectorAll('.foundation-collection-item-title');
      // Extract the text content from each element
      return Array.from(elements).map(el => el.textContent.trim());
       });

      // Print the extracted texts
        console.log(texts); // Output: ['gr1wxthglvw-gc-opt', 'gr1wxtpglvw-gc-opt']
        //const excelDataArray = text;
        // Write array to a JSON file
  fs.writeFileSync('data/excelDataArray.json', JSON.stringify(texts));
        await page.close();
    
    }) 
   
})


