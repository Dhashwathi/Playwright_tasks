import {test,expect} from '@playwright/test'

test("Date Picker",async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html');
    await page.click("//img[@title='Calendar-icon']");

    const date= "10";
    const month="September";
    const year="2024";
    while(true){
        const cm=await page.locator(".ui-datepicker-month").innerText();
        const cy=await page.locator(".ui-datepicker-year").innerText();

        if(month==cm.trim() && year==cy.trim()){
            break;
        }
        await page.click("//a[@data-handler='prev']");
    }
    //const dates=await page.$$("//a[@class='ui-state-default']");
    /*for(let d in dates){
        if(await d.textContent()==date){
            await d.click();
            break;
        }
    }*/

    await page.click(`//a[@class='ui-state-default'] [text()='${date}']`)
    await page.waitForTimeout(5000);
})