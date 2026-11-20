import { Page, Locator } from '@playwright/test'
export class basepage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    async navigate(url: string) {
        await this.page.goto(url)
    }
    async fill(locator: Locator, value: string) {
        await locator.fill(value)
        console.log(value)
    }
    async click(locator: Locator) {
        await locator.click()
    }
}