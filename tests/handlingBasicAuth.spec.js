//@ts-check

const{test,expect}=require("@playwright/test");

test('Basic Auth using Bypassing',async({page})=>{
    
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
   const txt= await page.locator("//p[contains(text(),'Congratulations! You must have the proper credenti')]").textContent();
    expect(txt).toContain('Congratulations');

});


test('Basic Auth using request interceptor',async({page})=>{
    
    const username ='admin';
    const password='admin';

    const base64creds = Buffer.from(`${username}:${password}`).toString('base64');

    await page.route('**/*',(route)=>{
        const headers ={
            'Authorization':`Basic ${base64creds}`,
        };
    
    route.continue({headers});
    });

    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await page.waitForLoadState('load');
    const txt= await page.locator("div[class='example'] p").textContent();
    expect(txt).toContain('Congratulations');
})