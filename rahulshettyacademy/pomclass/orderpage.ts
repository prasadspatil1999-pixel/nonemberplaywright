import{Page,Locator} from '@playwright/test'
import { basepage } from '../basePage/basepage';
import path from 'node:path';
export class orderpage extends basepage{
    readonly orderid:Locator
    readonly invoice:Locator
    private orderHistoreyPage:Locator

    constructor(page:Page)
    {
        super(page)
        this.orderid=this.page.locator("label.ng-star-inserted")
        this.invoice=this.page.getByText("Click To Download Order Details in CSV")
        this.orderHistoreyPage=this.page.locator("td.em-spacer-1 label").first()

    }
    async orderids()
    {
        const ids=await this.verfiMessage(this.orderid)
        console.log(ids)
        const cleanid=ids?.replaceAll("|"," ")
        console.log(cleanid)
        const downloadresult=this.page.waitForEvent("download")
        await this.click(this.invoice)
        const downlaod=await downloadresult
        const downdir=path.join(__dirname,'../../Downlaod')
        console.log(downdir)
        const filename=downlaod.suggestedFilename()
        console.log(filename)
        const filepath=path.join(downdir,filename)
        await downlaod.saveAs(filepath)
        await this.click(this.orderHistoreyPage)

    }
}