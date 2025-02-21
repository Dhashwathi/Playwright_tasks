/*import {test,expect} from '@playwright/test'

test('autoxpath',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.fill('#twotabsearchtextbox','laptop');
    await page.waitForSelector("//span[@class='s-heavy']");
    const values=await page.$$("//span[@class='s-heavy']");
    for(const v of values){
        const txt=await v.textContent();
        console.log(txt);
    }
    await page.waitForTimeout(5000);

})*/

import { test, expect, chromium } from '@playwright/test';

test('addquantity', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://www.amazon.in/');
    await page.fill('#twotabsearchtextbox', 'laptop');

    await page.waitForSelector('.s-heavy');
    const values = await page.$$('.s-heavy');
    
    for (const v of values) {
        const txt = await v.textContent();
        if (txt.includes('stand metal')) {
            await v.click();
            break;
        }
    }

    await page.waitForSelector("(//div[@data-cy='title-recipe'])[1]");
    
    // Fix: Proper handling of new page
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("(//div[@data-cy='title-recipe'])[1]").click()
    ]);

    await newPage.waitForSelector("//span[normalize-space()='Quantity:']");
    await newPage.click("//span[normalize-space()='Quantity:']");

    const num = await newPage.$$("//li[@class='a-dropdown-item']/a");
    for (const i of num) {
        const n = await i.textContent();
        console.log(n);
    }

    await newPage.click("//span[@class='nav-cart-icon nav-sprite']");
    await newPage.waitForSelector("span[data-a-selector='value']");
    
    const count = await newPage.locator("span[data-a-selector='value']").textContent();
    console.log(count);

    // Fix: Define 'c' and use correct 'expect' syntax
    const c = 1; // Expected quantity
    await expect(Number(count)).toBe(c);

    await newPage.waitForTimeout(5000);
    await browser.close();
});
