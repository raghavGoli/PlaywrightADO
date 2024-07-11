//@ts-check

const{test,expect}=require("@playwright/test");

test('Shadow DOM inside Iframe',async({page})=>{
    
    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');
    await page.waitForLoadState('load');
    
    const mainIFrame= await page.frameLocator('//iframe[@id="pact"]');
    await mainIFrame.locator('#tea').fill('I love tea better than coffee')
    await page.waitForTimeout(5000);

    await mainIFrame.locator('#pizza').fill('I love pizza in lunch')
    await page.waitForTimeout(5000);

    
});