# react-native-webapp
A friend of mine asked for simple and fast solution for creating a Mobile App version of a website for both Android and iOS. Thanks to **[React Native](https://facebook.github.io/react-native/)** and **[React Native Webview](https://github.com/react-native-community/react-native-webview/)**, I have created a React Native project for those who are looking for the same solution and they lack technical knwoledge of developing an app using React Native.
The only thing you need to do is clone the project and open `config.js` and change the settings. 

### Dependencies
- React Native Webview: **[Link](https://github.com/react-native-community/react-native-webview/)**
- Native Base: **[Link](http://nativebase.io/)**
- React Native Splash Screen **[Link](https://github.com/crazycodeboy/react-native-splash-screen)**

### Examples

|Splash Screen| With Header & Logo| Without Header|
| --- | --- | --- |
|![](screenshots/rnwa-splash-screen.png) | ![](screenshots/rnwa-with-header.png) | ![](screenshots/rnwa-without-header.png)|

### Config file
``` javascript
config = {
  header: {
    visible: false, // false: hide the header NavBar
    hasLogo: false, // false: hide logo
    logoMarginLeft: 0,
    logoMarginRight: 16,
    logoHeight: 26,
    logoWidth: 26,
    title: "React Native WebApp",
    titleColor: "#303030",
    backgroundColor: "#fff",
    paddingLeft: 16
  },
  spinner: {
    showSpinner: true, // false: hide the spinner on loading the page
    color: "#f00", // Spinner color
    size: "large", // small OR large
    positionRight: 10,
    positionBottom: 10,
  },
  web: {
    url: "https://facebook.github.io/react-native/",
    marginTop: 0,
    automaticallyAdjustContentInsets: true,  // Set this to provide JavaScript that will be injected into the web page when the view loads. Make sure the string evaluates to a valid type (true works) and doesn't otherwise throw an exception.
    cacheEnabled: true, // Sets whether WebView & WKWebView should use browser caching.
    scalesPageToFit: true // Boolean that controls whether the web content is scaled to fit the view and enables the user to change the scale.
  }
}
```
