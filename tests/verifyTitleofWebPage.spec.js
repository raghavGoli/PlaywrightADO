//@ts-check

const { test, expect } = require("@playwright/test");

test('Validate the Title of Orange HRM Website', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
})