import{test,expect, Dialog} from '@playwright/test'
 test("Window handle1",async({page})=>
{
    let message=" i ma prasa dpatil"
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")
    const newpage=page.waitForEvent("popup")
    await page.locator("#newTabBtn").click()
    const page1= await newpage
    page1.on('dialog',(dialog:Dialog)=>
    {
        console.log(dialog.type())
        console.log(dialog.defaultValue())
        console.log(dialog.message())
        dialog.accept(message)
    })
    await page1.locator("#promptBox").click()
    await expect(page1.locator("#output")).toContainText(`You entered text ${message}`)
    await page.bringToFront()
})