import {test,expect} from '@playwright/test'

test(" Single File upload",async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html');

    await page.waitForSelector('#myFile');
    await page.click('#myFile');
    await page.locator('#myFile').setInputFiles('tests\files\Employment Application Form.pdf');

    await page.waitForTimeout(3000);
})

test.only("Multiple file upload", async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('#filesToUpload');
   // await page.click('#filesToUpload');
    await page.locator('#myFile').setInputFiles([
                                'tests\\files\\Employment Application Form.pdf',
                                'tests\\files\\Selenium WebDriver complete Notes_compressed (1).pdf']
                            );

    await page.waitForTimeout(3000);
})