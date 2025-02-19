import{test,expect} from '@playwright/test'

test("Keyboard Actions", async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    await page.fill("//textarea[@name='text1']","welcome home");

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V');
    

    await page.waitForTimeout(3000);
})