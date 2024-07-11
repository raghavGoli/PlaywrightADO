//@ts-check

const{test,expect}=require("@playwright/test");
const assert = require("assert");

  test('Accept  the alerts',{tag:'@alert',},async({page})=>{
    
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.waitForLoadState('networkidle');
        
        await page.locator("//input[@id='name']").fill("venkat is automation engineer");
        page.on('dialog',dialog=>dialog.accept());
        await page.locator("//input[@id='confirmbtn']").click();
    
    });

    test('print message and accept the alerts',{tag:'@alert',},async({page})=>{
    
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.waitForLoadState('networkidle');
        
        await page.locator("//input[@id='name']").fill("venkat is automation engineer");
    
        await page.on('dialog',async(a)=>{
            console.log(await a.message())
            expect(await a.message()).toBe("Hello venkat is automation engineer, Are you sure you want to confirm?")
            a.accept();
        });
        await page.locator("//input[@id='confirmbtn']").click();

})

test('Handling prompts',{tag:'@prompt',},async({page})=>{
    
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('load')
    
    await page.on('dialog',async(a)=>{
        console.log(await a.message())
        a.accept("venkat is automation sdet");
    });
    await page.locator("//button[normalize-space()='Click To Open Window Prompt Alert']").click();

   
});


