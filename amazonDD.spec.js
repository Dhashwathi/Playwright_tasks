import {test,expect} from '@playwright/test'

test('addtocart', async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.fill('#twotabsearchtextbox','laptop');

    await page.waitForSelector('.s-heavy');
    const values=await page.$$('.s-heavy');
    for(const v of values){
        const txt=await v.textContent();
        if(txt.includes('under 35000')){
            await v.click();
            break;
        }
    }
    let c=0;
    for(let i=0;i<5;i++){
        const button= await page.locator('#a-autoid-1-announce');
        await button.waitFor({state:'visible'});
        await button.click();
        c++;
        await page.waitForSelector('#nav-cart-count', { state: 'attached' });

    }
    await page.click("//span[@class='nav-cart-icon nav-sprite']");
    await page.waitForSelector("span[data-a-selector='value']");
    const count= await page.locator("span[data-a-selector='value']").textContent();
    console.log(count);
    await expect(Number(count)).toBe(c);
    await page.close();
})