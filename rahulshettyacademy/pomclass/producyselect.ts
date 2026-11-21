import{Page,Locator} from '@playwright/test'
import { basepage } from '../basePage/basepage';
export class productselectpage extends basepage{
    readonly productSelect:Locator
    readonly carticon:Locator
    readonly productSelectMessage:Locator
    readonly checkoutbtn:Locator
    constructor(page:Page)
    {
        super(page)
        this.productSelect=this.page.locator("div.card-body")
        this.carticon=this.page.locator(".btn").nth(2)
        this.productSelectMessage=this.page.locator("#toast-container")
        this.checkoutbtn=this.page.getByText("Checkout")
    }
    async products(product:string)
    {
        await this.productSelect.first().waitFor()
        const oneproduct=await this.productSelect.count()
        for(let i=0; i<oneproduct;i++)
        {
            const allproductselect=await this.productSelect.nth(i).locator("h5").textContent()
            if(allproductselect===product)
            {
                await this.productSelect.nth(i).locator(".w-10").click()
                break
            }
        }
        await this.click(this.carticon)
        const selectmessage=await this.verfiMessage(this.productSelectMessage)
        console.log(selectmessage)
        await this.click(this.checkoutbtn)
    }
}