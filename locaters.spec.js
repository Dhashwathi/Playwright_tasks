//const{test,expect} =require('@playwright/test')
import{test,expect} from '@playwright/test'

test('locators',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    //await page.locator('id=login2').click();

    //unique property ie., id
    await page.click('id=login2');
    //css selector
    await page.locator('#loginusername').fill('Dhashwathi');
    //await page.fill('#loginusername','Dhash');
    //await page.type('#loginusername','Dhash');
    //---------Xpath------
    await page.fill("input[id='loginpassword']",'Dhash12345');
    await page.click("//button[normalize-space()='Log in']");
    const logout= await page.locator("(//a[normalize-space()='Log out'])");
    await expect(logout).toBeVisible();
    await page.close;

}) 