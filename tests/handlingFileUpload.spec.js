//@ts-check

const{test}=require("@playwright/test");

test('Single File Upload',async({page})=>{
    
    await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd');
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='upload']").setInputFiles('C:/Users/user/Desktop/PlayWrightYoutubeLearninng/sample.txt');

});


test('Single File Upload SelectorsHub',async({page})=>{
    
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='myFile']").setInputFiles('C:/Users/user/Desktop/PlayWrightYoutubeLearninng/sample.txt');
    await page.waitForTimeout(5000);
});

test('Multiple File Upload',async({page})=>{
    
    await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd');
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='upload']").setInputFiles(['C:/Users/user/Desktop/PlayWrightYoutubeLearninng/sample.txt','C:/Users/user/Desktop/PlayWrightYoutubeLearninng/sample2.txt']);
    await page.waitForTimeout(5000);
});



test('Buffer File Upload',async({page})=>{
    
    await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd');
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='upload']").setInputFiles(
    {
        name: 'PlaywrightSample.txt',
        mimeType:'text/plain',
        buffer:Buffer.from('this is a sample test'),
    });
    await page.waitForTimeout(5000);
});

test('File Upload without type tag',async({page})=>{
    
    await page.goto('https://easyupload.io/');
   //await page.waitForLoadState('networkidle');
   // const filechooserPromise=await page.waitForEvent('filechooser');
   // const filechooser =await filechooserPromise;
    //await filechooser.setFiles("C:/Users/user/Desktop/PlayWrightYoutubeLearninng/sample.txt");
    //await page.waitForTimeout(5000);

    await page.locator('//button[@class="dz-button"]').click();
    
    page.on('filechooser', async fileChooser => {
        await fileChooser.setFiles("C:/Users/user/Desktop/PlayWrightYoutubeLearninng/sample.txt");
      });
      
});