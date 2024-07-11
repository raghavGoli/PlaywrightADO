//@ts-check

const{test,expect}=require("@playwright/test")

test('validate the dropdown',async({page})=>{
    
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.waitForLoadState('networkidle');
        await page.locator('#state').click({force:true});
        await page.waitForLoadState('networkidle')
        await page.locator('#react-select-3-option-0').click();

});

test('validate the select dropdown',async({page})=>{
    
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('networkidle');
    await page.locator('//input[@id="user-name"]').fill("standard_user");
    await page.locator('//input[@id="password"]').fill("secret_sauce");
    await page.locator('//input[@id="login-button"]').click();
    await page.waitForLoadState('networkidle');
    await page.locator('//select[@class="product_sort_container"]').selectOption({index:2});
    await page.locator('//select[@class="product_sort_container"]').selectOption("Price (high to low)");
    const vals=await page.locator('//select[@class="product_sort_container"]').allTextContents();
    console.log(vals);

});

test('validate the autosuggest dropdowns',async({page})=>{
    
    const searchVal ="Ch";
    const searchValue="China";
    await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/');
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='autocomplete-default']").pressSequentially(searchVal);

    const values=await page.locator("//ul[@id='autocomplete-default__listbox']//li");
    const constVals=await values.count();
    for(let i=0;i<constVals;i++)
        {
          const txt=  await values.nth(i).textContent();
          if(txt===searchValue)
            {
                await values.nth(i).click();
                break;
            }
        }
});