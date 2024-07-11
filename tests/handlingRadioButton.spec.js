//@ts-check

const { test, expect } = require("@playwright/test");

test('Handling radio button', async ({ page }) => {
await page.goto('https://demoqa.com/automation-practice-form');
await page.locator('//h1[@class="text-center"]').isVisible();
var flag=await page.locator('//label[normalize-space()="Male"]').isChecked();
console.log(flag);
await page.locator('//label[normalize-space()="Male"]').check();
var flag=await page.locator('//label[normalize-space()="Male"]').isChecked();
console.log(flag);


});

