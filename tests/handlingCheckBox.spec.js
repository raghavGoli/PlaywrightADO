//@ts-check

const { test, expect } = require("@playwright/test");

test('Handling checkbox button', async ({ page }) => {
await page.goto('https://demoqa.com/automation-practice-form');
await page.waitForLoadState('networkidle');
await page.locator('//h1[@class="text-center"]').isVisible();
var flag=await page.locator('//label[normalize-space()="Sports"]').isChecked();
console.log(flag);
expect(page.getByLabel('Sports')).toBeChecked();
await page.locator('//input[@id="userEmail"]').fill("venkata.rg1988@gmail.com")
await page.locator('//label[normalize-space()="Sports"]').check();
var flag2=await page.locator('//label[normalize-space()="Sports"]').isChecked();
console.log(flag2);
});