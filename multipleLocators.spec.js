import {test,expect} from '@playwright/test'

test('MulLocators',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    //const links=await page.$$('a');
    /*for(const link of links){
        const printlink=await link.textContent();
        console.log(printlink);
    }*/
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const link_name=await page.$$("//div[@id='tbodyid']//h4/a");
    for(const p of link_name){
        const pl=await p.textContent();
        console.log(pl);
    }
    
    
})