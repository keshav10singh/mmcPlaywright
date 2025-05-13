const{test, expect}= require('@playwright/test');

test.describe.only(' AEM UAT Demo', ()=>{

    test.beforeEach('Open start URL', async ({ page },testInfo) => {
      testInfo.setTimeout(testInfo.timeout + 60000);
     await page.goto(process.env.CAaem);
 });
 
    test('Login Success Test', async ({page})=>{
 
     await page.getByPlaceholder('User name').fill(process.env.aemusername);
     await page.getByPlaceholder('Password', { exact: true }).fill(process.env.aempassword);
     await page.getByRole('button',{ name: 'Sign In' }).click();
   // await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible({ timeout: 100000 });
   // await page.locator('xpath=//coral-masonry-item[@aria-colindex="4"]//div[@class="globalnav-homecard-title"]').click();
    //await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible({ timeout: 50000 });
    //await expect(page.getByRole('button', { name: 'Assets' })).toBeVisible({ timeout: 50000 });
    //await page.locator('xpath=//coral-masonry-item[@aria-colindex="1"]//div[@class="globalnav-homecard-title"]').click();
    //await expect(page.getByRole('heading', { name: 'Assets' })).toBeVisible();
    //await expect(page.getByRole('button', { name: 'Assets' })).toBeVisible({ timeout: 50000 });
   // await page.getByRole('button', { name: 'Close' }).click();
   //await page.getByTestId('scrolling-container').hover();
   //await page.mouse.wheel(0, 50);
    
    //await page.locator('xpath=//coral-card-title[normalize-space()="mitsubishi-motors-ph"]').click();
    //await expect(page.getByRole('heading', { name: 'mitsubishi-motors-ph' })).toBeVisible({ timeout: 50000 });
    //await page.getByRole('link', { name: 'en Folder en Asset' }).click({ timeout: 500000 });
   // await expect(page.getByRole('button', { name: 'mitsubishi-motors-ph , Change' })).toBeVisible({ timeout: 50000 });
    //await page.locator('xpath=//coral-card-title[normalize-space()="en"]').click({ timeout: 500000 });
    //await page.getByRole('link', { name: 'en Folder en' }).click({ timeout: 500000 });
    //await page.getByRole('link', { name: 'Cars Folder Cars' }).click({ timeout: 500000 });
    //await page.getByRole('link', { name: 'xpander Folder xpander' }).click({ timeout: 500000 });
    //await page.getByRole('link', { name: '2025 Folder 2025' }).click();
    //await page.getByRole('link', { name: 'models Folder models' }).click();
    //await page.getByLabel('Select').click();

    //await page.locator(
      //  `//coral-masonry-item[@aria-colindex="3"]//div[@class="globalnav-homecard-title"]`
    //).waitFor().click();
   // await page.locator('globalnav-collection-container').locator('nth=3').click();
   // await page.locator(':nth-match(:text("data-datasource-index"), 3)').click();
   // await getByRole('link', { name: 'title_02aab336-bf78-4877-a7fd-e966a79d592b' }).click();
     //const titleText = await page.getByText('Swag Labs');
    // await expect(titleText).toContainText('Swag Labs');
     //await page.close();
 
 }) 

 })

