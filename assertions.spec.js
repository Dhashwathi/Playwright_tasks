import {test,expect} from '@playwright/test'

test('Assertion',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logo= await page.locator('.header-logo');
    await expect(logo).toBeVisible();
    const id=await page.locator('#small-searchterms');
    await expect(id).toBeEnabled();
    const check =await page.locator('#gender-male');
    await check.click();
    await expect(check).toBeChecked();
    const checkbox =await page.locator('#Newsletter');
    await expect(checkbox).toBeChecked();
    const typebutton=await page.locator('#register-button');
    await expect(typebutton).toHaveAttribute('type','submit');
    await expect(await page.locator('.page-title h1')).toHaveText("Register");
    await expect(await page.locator('.page-title h1')).toContainText("Register");
    const em=await page.locator('#Email');
    await em.fill('Dhash123@kmail.com');
    await expect(em).toHaveValue("Dhash123@kmail.com");
    const dropdwn= await page.locator("select[name='customerCurrency'] option");
    await expect(dropdwn).toHaveCount(2);


    //-----------SOFT ASSERTIONS-----------------
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE12');
    await expect(await page.locator('#nava')).toBeVisible();

})