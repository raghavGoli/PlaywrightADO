//@ts-check

const{test,expect}=require("@playwright/test");

test('Closed Shadow DOM',async({page})=>{
    
    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');
    await page.waitForLoadState('load');
    const mainIFrame= await page.frameLocator('//iframe[@id="pact"]');
    await mainIFrame.locator('#pizza').click();
    await page.keyboard.press('Tab'); 
    await page.keyboard.type('I love pizza');
    await page.waitForTimeout(5000);
    
   });
