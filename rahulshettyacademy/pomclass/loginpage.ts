import { Page, Locator } from '@playwright/test'
import { basepage } from '../basePage/basepage';
export class loginPage extends basepage {
    readonly username: Locator
    readonly password: Locator
    readonly loginbtn: Locator

    constructor(page: Page) {
        super(page)
        this.username = this.page.locator("#userEmail")
        this.password = this.page.locator("#userPassword")
        this.loginbtn = this.page.locator("#login")
    }
    async applicationUrl(url: string) {
        await this.navigate(url)
    }
    async logininfo(username: string, password: string) {
        await this.fill(this.username, username)
        await this.password.fill(password)
        await this.click(this.loginbtn)

    }
}