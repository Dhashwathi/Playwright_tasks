import {test,expect} from '@playwright/test'

test("bultin_Locators", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo=await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill("Dhashwathi");
    await page.getByPlaceholder('Password').fill("Dha123");

    await page.getByRole('button',{type:'submit'}).click();
    

})