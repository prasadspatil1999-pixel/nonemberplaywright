import{test,expect} from '@playwright/test'
test("app lofin",async({page})=>
{
await page.goto("https://www.facebook.com/")
await page.locator("#_R_c9l6neappb6amH1_").pressSequentially("prasad@gmail.com")
})