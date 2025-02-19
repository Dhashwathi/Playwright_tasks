import{test,expect} from '@playwright/test'

test("Drag And Drop", async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    const sr=await page.locator("//div[@rel-title='Photo Manager']//iframe[@class='demo-frame lazyloaded']");
    const de=await page.locator('#trash');

    /*await src.hover();
    await page.mouse.down();

    await des.hover();
    await page.mouse.up();*/

    await sr.dragTo(de);

    await page.waitForTimeout(3000);
})