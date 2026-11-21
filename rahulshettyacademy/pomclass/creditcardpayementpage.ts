import {Page,Locator, expect} from '@playwright/test'
import { basepage } from '../basePage/basepage';
export class creditCardPage extends basepage{
    readonly CreditCardnumber:Locator
    readonly CreditCardCVV:Locator
    readonly CreditCardName:Locator
    readonly verifyEmail:Locator
    readonly EnterCityName:Locator
    readonly SelectCountry:Locator
    readonly placeholder:Locator
    constructor(page:Page)
    {
        super(page)
        this.CreditCardnumber=this.page.locator(".input").nth(0)
        this.CreditCardCVV=this.page.locator(".input").nth(3)
        this.CreditCardName=this.page.locator(".input").nth(4)
        this.verifyEmail=this.page.locator(".details__user input").first()
        this.EnterCityName=this.page.locator(".details__user input").last()
        this.SelectCountry=this.page.locator("section.ta-results  button")
        this.placeholder=this.page.getByText("Place Order ")
    }    
    async creditcard(number:string,cvv:string,name:string)
    {
        await this.clear(this.CreditCardnumber)
        await this.fill(this.CreditCardnumber,number)
        await this.fill(this.CreditCardCVV,cvv)
        await this.fill(this.CreditCardName,name)
    }
    async email(email:string)
    {
        await expect(this.verifyEmail).toHaveValue(email)
    }
    
    async allcity(country:string,city:string)
    {
        await this.EnterCityName.pressSequentially(country)
        await this.SelectCountry.last().waitFor()
        const allcity=await this.SelectCountry.count()

        for(let i=0;i<allcity;i++)
        {
            const allcity=await this.SelectCountry.nth(i).innerText()
            if(allcity?.trim()===city)
            {
                await this.SelectCountry.nth(i).click()
                break
            }
        }
        await this.click(this.placeholder)
    }
}