//@ts-check

const { test, expect } = require("@playwright/test");

test('Validate the login of Orange HRM Website using CodeGen', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page.getByPlaceholder('Username')).toBeVisible();
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.getByRole('heading')).toContainText('Dashboard');
await page.getByAltText('profile picture').click();
await expect(page.getByText('Logout')).toBeVisible();
await page.getByText('Logout').click();
await expect(page.getByPlaceholder('Username')).toBeVisible();

});


test('Validate the login of Orange HRM Website using xpath css locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.getByRole('button').filter({hasText:'Login'}).click();
    await page.getByRole('heading').filter({hasText:'Dashboard'}).isVisible();
    await page.getByRole('listitem').filter({hasText:'Time'}).click();
    await page.locator('//span[normalize-space()="Timesheets"]').isVisible();

   
    
    });