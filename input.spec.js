import {test,expect} from '@playwright/test'

test('inputbox',async({page})=>{
    /*await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator("//input[@name='username']")).toBeEnabled();
    await expect(page.locator("//input[@name='username']")).toBeVisible();
    await expect(page.locator("//input[@name='username']")).toBeEmpty();
    await expect(page.locator("//input[@name='username']")).toBeEditable();

    await page.fill("//input[@name='username']","Dhash");*/

    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator("//input[@value='M']").check();
    await expect(await page.locator("//input[@value='M']")).toBeChecked()
    await expect(await page.locator("//input[@value='M']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@value='F']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})