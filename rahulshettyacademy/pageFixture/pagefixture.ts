import { test as basetest } from '@playwright/test'
import { loginPage } from '../pomclass/loginpage'
import { productselectpage } from '../pomclass/producyselect'
import { creditCardPage } from '../pomclass/creditcardpayementpage'
type pomFixture = {
    login: loginPage
    product:productselectpage
    credit:creditCardPage
}

export const test=basetest.extend<pomFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page))
    },
    product: async({page},use)=>
    {
        await use(new productselectpage(page))
    },
   credit: async ({page},use)=>
    {
        credit:await use(new creditCardPage(page) )
    }
    

})