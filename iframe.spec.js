import{test,expect} from '@playwright/test'

test('iframes',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const f3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await f3.locator("input[name='mytext3']").fill("hello");
    const cf3=await f3.childFrames();
    cf3[0].locator("//*[@id='i6']/div[3]/div").check();
    
    await page.waitForTimeout(5000);
})