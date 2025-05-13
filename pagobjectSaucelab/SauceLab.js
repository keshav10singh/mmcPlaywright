const{test, expect}= require('@playwright/test');

export default class SauceLab{
    constructor(page){
        this.page=page;
        this.usernameInput=page.locator('[data-test="username"]');
        this.passwordInput=page.locator('[data-test="password"]');
        this.loginButton= page.locator('[data-test="login-button"]');

    }

    async visit(){
        await this.page.goto('https://www.saucedemo.com/');
    }
     
    async trylogin(username,password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertErrorLogin(){
        const errorMessage = await this.page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service')
    }

    async assertSuccessLogin(){
        const titleText = await this.page.getByText('Swag Labs');
       await expect(titleText).toContainText('Swag Labs');
    }
}