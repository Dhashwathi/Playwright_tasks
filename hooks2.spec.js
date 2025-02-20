import {test,expect} from '@playwright/test'

let page;
//instead of using multiple page fixture,use one page fixture which referin every test below

test.beforeEach(async({browser})=>{ //beforeEach, afterEach don't allow to pass page fixture
    page =await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');
    await page.click('id=login2');
    await page.fill('#loginusername','DhashMB');
    await page.fill('#loginpassword','Dhash12345');
    await page.click("//button[normalize-space()='Log in']");
});

test.afterEach(async()=>{
    await page.click('#logout2');
});

test("hooks", async()=>{
    await page.waitForSelector("//div[@class='card-block']");
    const prod=await page.$$("//div[@class='card-block']");
    expect(prod).toHaveLength(9);
    //await page.waitForTimeout(3000);
});

test("add to cart",async()=>{
    await page.waitForSelector("//a[normalize-space()='Samsung galaxy s6']");
    await page.click("//a[normalize-space()='Samsung galaxy s6']");
    await page.waitForSelector("//a[normalize-space()='Add to cart']");
    await page.click("//a[normalize-space()='Add to cart']");

    page.on('dialog',async dialog=>{
        expect(dialog.message().toContain("Product added."));
        await dialog.accept();
    })


});
