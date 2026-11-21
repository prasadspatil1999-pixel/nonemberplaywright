import{test,expect} from '@playwright/test'
test("app lofin",async({page})=>
{
await page.goto("https://www.facebook.com/")
})