

import Page from './page.js';

const findTextByDesc =  async (desc) => {
    //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
    //https://webdriver.io/docs/selectors#android-uiautomator
    const selector = `new UiSelector().description("${desc}").className("android.widget.TextView")`
    return await $(`android=${selector}`)
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConnectPage extends Page {

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        super.open('pizzk.android.appiumtest/.MainActivity')
    }

    async finish () {
        const button = await findTextByDesc('click_button')
        //https://webdriver.io/docs/api/element/waitForExist#example
        //wait for activity create and button add to window
        await button.waitForExist({ timeout: 5000 })
        await button.click()
        return true
    }
}

export default new ConnectPage();
