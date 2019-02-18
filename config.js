export default (config = {
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
});
