const config = {
    name: 'appium',
    port: 4273,
    args: {
        address: '127.0.0.1',
        allowCors: true,
        basePath: '/',
        callbackAddress: '127.0.0.1',
        debugLogSpacing: true,
        keepAliveTimeout: 600,
        localTimezone: true,
        log: './log/appium.log',
        logLevel: 'info',
        logNoColors: false,
        logTimestamp: true,
        longStacktrace: false,
        noPermsCheck: false,
        relaxedSecurity: false,
        sessionOverride: false,
        strictCaps: true
    },
    capabilities: {
        'platformName': 'Android',
        'appium:deviceName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
    }
}
export default config