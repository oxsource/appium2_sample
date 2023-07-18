

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
        console.log(`get finish button ${button}`)
        await button.click()
        return true
    }
}

export default new ConnectPage();
