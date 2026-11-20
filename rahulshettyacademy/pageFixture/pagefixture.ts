import { test as basetest } from '@playwright/test'
import { loginPage } from '../pomclass/loginpage'
type pomFixture = {
    login: loginPage
}

export const test=basetest.extend<pomFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page))
    }

})