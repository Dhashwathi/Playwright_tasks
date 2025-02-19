import{test,expect} from '@playwright/test'

test('MouseHover',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    const d=await page.locators("//a[normalize-space()='Desktops']");
    const m=await page.locators("//a[normalize-space()='Mac (1)']");

    d.hover();
    m.hover();
    await page.waitForTimeout(3000);
})