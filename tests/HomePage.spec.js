const{test, expect}= require('@playwright/test');


test.describe(' Sauce Lab Demo', ()=>{

   test.beforeEach('Open start URL', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

   test('Login Success Test', async ({page})=>{

   
   await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    const titleText = await page.getByText('Swag Labs');
    await expect(titleText).toContainText('Swag Labs');
    await page.close();

}) 

test(' Login error test', async ({page})=>{

  
   await page.locator('[data-test="username"]').fill('abcd');
    await page.locator('[data-test="password"]').fill('abcd');
    await page.locator('[data-test="login-button"]').click();
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    await page.close();

}) 

})

test('Home Page', async ({page})=>{

   await page.goto('https://www.demoblaze.com/');
   
   const pageTitle=page.title();
   console.log('Page Title is:',pageTitle);
   await expect(page).toHaveTitle('STORE');

   const pageURL=page.url();
   console.log('Page URL is:',pageURL);
   await expect(page).toHaveURL('https://www.demoblaze.com/');
  
   await page.close();

})

test(' Take Screenshot ', async({page})=>{
   await page.goto('https://www.demoblaze.com/');
  // await page.screenshot({ path:'app.png' });
   await page.locator('#cartur').click();
  // await page.screenshot({ path:'app1.png' });
   expect (await page.screenshot()).toMatchSnapshot();

})

