//@ts-check

const{test,expect}=require("@playwright/test");

test('Handling nested iframes one by one',async({page})=>{
    
    await page.goto('https://selectorshub.com/iframe-scenario/');
    await page.waitForLoadState('load');
    const mainIFrame= await page.frameLocator('//iframe[@id="pact1"]');
    await mainIFrame.locator('//input[@id="inp_val"]').fill("myFirstCrush");
   
    const secondIframe =await mainIFrame.frameLocator('//iframe[@id="pact2"]');
    await secondIframe.locator('//input[@id="jex"]').fill("my current crush");
   
    const thirdIframe = await secondIframe.frameLocator('//iframe[@id="pact3"]');
    await thirdIframe.locator('//input[@id="glaf"]').fill("Kulumanali");
    


});
