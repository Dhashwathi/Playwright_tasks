const {test,expect} = require('@playwright/test')

test('Homepage', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    const pagetitle=await page.title();
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.close();
})