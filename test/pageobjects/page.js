/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the page component(e.g. com.android.car/com.android.car.hvac.IndexActivity)
    */
    open (path) {
        const values = path.split('/')
        if (values.length != 2) throw Error(`bad actiivity component path: ${path}`)
        const pkg = values[0]
        const activity = values[1].startsWith('.') ? `${pkg}${values[1]}` : values[1]
        driver.startActivity(pkg, activity)
    }
}
