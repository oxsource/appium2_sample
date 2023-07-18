/**
 * test with page objects
 */
import ConnectPage from '../pageobjects/connect.page.js'

//https://webdriver.io/docs/retry#rerun-single-tests-in-jasmine-or-mocha
describe('AppiumTest Page', () => {
    it('should open then auto finish', async () => {
        ConnectPage.open()
        await ConnectPage.finish()
        console.log('success finish')
    }, 1)
})

