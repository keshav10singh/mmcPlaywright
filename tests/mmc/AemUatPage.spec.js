const{test, expect}= require('@playwright/test');

test.describe.only(' AEM UAT Demo', ()=>{

    test.beforeEach('Open start URL', async ({ page },testInfo) => {
      testInfo.setTimeout(testInfo.timeout + 60000);
     await page.goto('https://author.uat.mipulse.co/aem/start.html');
 });
 
    test('Login Success Test', async ({page})=>{
 
     await page.getByPlaceholder('User name').fill('Keshavs');
     await page.getByPlaceholder('Password', { exact: true }).fill('Keshavs@2022');
     await page.getByRole('button',{ name: 'Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible({ timeout: 100000 });
    await page.locator('xpath=//coral-masonry-item[@aria-colindex="4"]//div[@class="globalnav-homecard-title"]').click();
    await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible({ timeout: 50000 });
    await expect(page.getByRole('button', { name: 'Assets' })).toBeVisible({ timeout: 50000 });
    await page.locator('xpath=//coral-masonry-item[@aria-colindex="1"]//div[@class="globalnav-homecard-title"]').click();
    //await expect(page.getByRole('heading', { name: 'Assets' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Assets' })).toBeVisible({ timeout: 50000 });
   // await page.getByRole('button', { name: 'Close' }).click();
   //await page.getByTestId('scrolling-container').hover();
   await page.mouse.wheel(0, 50);
    
    await page.locator('xpath=//coral-card-title[normalize-space()="mitsubishi-motors-ph"]').click();
    await expect(page.getByRole('heading', { name: 'mitsubishi-motors-ph' })).toBeVisible({ timeout: 50000 });
    await page.getByRole('link', { name: 'en Folder en Asset' }).click({ timeout: 500000 });
   // await expect(page.getByRole('button', { name: 'mitsubishi-motors-ph , Change' })).toBeVisible({ timeout: 50000 });
    await page.locator('xpath=//coral-card-title[normalize-space()="en"]').click({ timeout: 500000 });
    //await page.getByRole('link', { name: 'en Folder en' }).click({ timeout: 500000 });
    await page.getByRole('link', { name: 'Cars Folder Cars' }).click({ timeout: 500000 });
    await page.getByRole('link', { name: 'xpander Folder xpander' }).click({ timeout: 500000 });
    await page.getByRole('link', { name: '2025 Folder 2025' }).click();
    await page.getByRole('link', { name: 'models Folder models' }).click();
    await page.getByLabel('Select').click();

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

 test.skip("sample env test", async ({page})=>{

    console.log(process.env.NODE_env);
    console.log(process.env.username);
    console.log(process.env.password);

 });

})

test.describe(' AEM PH Demo', ()=>{

    test.beforeEach('Open start URL', async ({ page }) => {
     await page.goto('https://author.uat.mipulse.co/assets.html/content/dam/mitsubishi-motors-ph/en/cars/xpander/2025/models');
 });

 test('Print all Models', async ({page})=>{
 
    await page.getByPlaceholder('User name').fill('Keshavs');
    await page.getByPlaceholder('Password', { exact: true }).fill('Keshavs@2022');
    await page.getByRole('button',{ name: 'Sign In' }).click();
    //await expect(page.getByRole('heading', { name: 'Models' })).toBeVisible();
   let title= await page.locator('xpath=//coral-masonry-item[@aria-colindex="1"]//div[@class="coral-card-title"]').getByText();
   console.log(title);

})
})