import React, { Component } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { Container, Header, Title, Body } from "native-base";
import SplashScreen from "react-native-splash-screen";
import { WebView } from "react-native-webview";
import config from "../../config";

export default class HomeScreen extends Component<Props> {
  state = {
    isLoading: false
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { header, spinner, web } = config;

    return (
      <Container>
        {header.visible && (
          <Header style={styles.header}>
            <Body style={styles.headerBody}>
              {header.hasLogo && (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.logo}
                />
              )}
              <Title style={styles.headerTitle}>
                {header.title}
                {this.state.isLoading}
              </Title>
            </Body>
          </Header>
        )}
        {spinner.showSpinner &&
          this.state.isLoading && (
            <ActivityIndicator
              color={spinner.color}
              size={spinner.size}
              style={styles.spinner}
            />
          )}
        <WebView
          cacheEnabled={web.cacheEnabled}
          automaticallyAdjustContentInsets={
            web.automaticallyAdjustContentInsets
          }
          source={{ uri: web.url }}
          style={styles.webview}
          onLoadStart={() => this.setState({ isLoading: true })}
          onLoadEnd={() => this.setState({ isLoading: false })}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: config.header.backgroundColor,
    paddingLeft: config.header.paddingLeft
  },
  headerBody: {
    flexDirection: config.header.hasLogo ? "row" : "column"
  },
  headerTitle: {
    color: config.header.titleColor
  },
  logo: {
    width: config.header.logoWidth,
    height: config.header.logoHeight,
    marginLeft: config.header.logoMarginLeft,
    marginRight: config.header.logoMarginRight
  },
  spinner: {
    position: "absolute",
    right: config.spinner.positionRight,
    bottom: config.spinner.positionBottom,
    zIndex: 10
  },
  webview: {
    marginTop: config.web.marginTop
  }
});
