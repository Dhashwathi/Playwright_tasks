import {test,expect} from '@playwright/test'

test('addtocart', async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.fill('#twotabsearchtextbox','laptop');
    await page.click('#nav-search-submit-button');
    //await page.click("//a[@aria-label='Apply the filter HP to narrow results']//i[@class='a-icon a-icon-checkbox']");
    //await page.click("//span[@class='a-size-base a-color-base'][normalize-space()='New']");
    let c=0;
    for(let i=0;i<5;i++){
        const button= await page.locator('#a-autoid-1-announce');
        await button.waitFor({state:'visible'});
        await button.click();
        c++;
        await page.waitForSelector('#nav-cart-count', { state: 'attached' });

    }
    await page.click("//span[@class='nav-cart-icon nav-sprite']");
    const count= await page.locator("span[data-a-selector='value']").textContent();
    console.log(count);
    await expect(Number(count)).toBe(c);
    await page.close();
})