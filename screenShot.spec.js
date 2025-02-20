import {test,expect} from '@playwright/test'

test("homepage",async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests\\screenshots\\'+Date.now()+'homepage.png'})
});

test("fullpage",async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests\\screenshots\\'+Date.now()+'fullpage.png', fullPage:true});
});

test.only("particularpage",async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.locator("//body/main/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4']/div[1]").screenshot({path:'tests\\screenshots\\'+Date.now()+'element.png'})
});