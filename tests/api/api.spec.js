//const{test, expect}= require('@playwright/test');
import {expect,test} from '@playwright/test';

test.describe('API Test',()=>{
    //const baseUrl ='https://reqres.in/api';
    test('Test Get Resquest', async ({request}) => {
        const response= await request.get('https://reqres.in/api/users/2');
        const responseBody= JSON.parse(await response.text());
        console.log('Obj = ',responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody.data.id).toBe(2);

    });

    test('Test Post Request', async ({request})=>{
        const response =await request.post('https://reqres.in/api//users', {
            data: {
                "name": "morph",
                "job" : "leader"
            }
        });
        const responseBody= JSON.parse(await response.text());
        expect(response.status()).toBe(201);
        expect(responseBody.name).toBe('morph');

    })
});