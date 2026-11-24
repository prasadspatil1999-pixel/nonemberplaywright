import{test,expect} from '@playwright/test'
test("Calender handle1",async({page})=>
{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const year=1995
    const month="April"
    const date="14"

    const allonth=["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]

    function getMonthIndes(month:any)
    {
        return allonth.indexOf(month)
    }
    const currentYear=page.locator(".ui-datepicker-year")
    const currentMonth=page.locator(".ui-datepicker-month")

    while(true)
    {
        const monthtest=await currentMonth.textContent()
        const yeartest=Number(await currentYear.textContent())
        if(monthtest===month && yeartest===year )
        {
            break
        }
        const getMonthIndex=getMonthIndes(monthtest)
        const getselectMonthIndex=getMonthIndes(month)
        if(yeartest>year || yeartest===year && getMonthIndex>getselectMonthIndex)
        {
            await page.locator(".ui-icon").first().click()
        }
        else{
            await page.locator(".ui-icon").last().click()
        }
        
    }
            await page.getByText(date,{exact:true}).click()
            const dates=date.toString().padStart(2,"0")
            const months=(getMonthIndes(month)+1).toString().padStart(2,"0")
            const verdate=`${months}/${dates}/${year}`
            await expect(page.locator("#sixth_date_picker")).toHaveValue(verdate)

})
