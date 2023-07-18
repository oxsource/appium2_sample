## 前言
本自动化测试 demo 基于 webdriver + APPIUM2.0 + uiautomator2 实现了一个简单的案例。

## 准备 Android 测试环境
+ 安装Java、Android-SDK tool 等工具，具体步骤可自行查阅相关文档

## 准备 Node 环境
+ 下载安装 NVM（github 或者中文官网https://nvm.uihtm.com/download.html）

## 全局安装APPIUM
+ npm i --location=global appium (http://appium.io/docs/en/2.0/quickstart/install/, 参考本demo 对 wdio.conf.js 相关配置进行替换)

## WEBDRIVE
+ 构建本地工程(参考文档 https://webdriver.io/docs/gettingstarted)
+ WDIO 构建配置生成（https://saucelabs.com/products/platform-configurator）

## 查找元素ID
+ Android工具：${ANDROID_SDK_HOME}\tools\bin\uiautomatorviewer.bat
+ APPIUM在线探测器：https://inspector.appiumpro.com/

## APPIUM 支持的协议
+ WDIO API 文档： https://webdriver.io/docs/api/appium
+ appium 支持的命令： https://appium.github.io/appium.io/docs/en/commands/mobile-command/
+ uiautomator2 支持的命令： https://github.com/appium/appium-uiautomator2-driver#platform-specific-extensions

## 问题
技术相关问题可联系QQ: 726676435