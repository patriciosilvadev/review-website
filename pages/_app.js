import React from "react";
import App, { Container } from "next/app";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import Head from "next/head";

import { layoutStyles } from "../style";

class MyApp extends App {
  static async getInitialProps({ req, Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <style jsx>{layoutStyles}</style>
        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
              }`
            }}
          />
          <script
            type="text/javascript"
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          ></script> */}

          <title>The trust search engine</title>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />

          {process.env.NODE_ENV === "production" ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5KPH988');`
              }}
            />
          ) : (
              <script></script>
            )}
        </Head>
        <Container>
          {process.env.NODE_ENV === "production" ? (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KPH988"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
              }}
            />
          ) : (
              <noscript />
            )}
          <Provider store={reduxStore}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={this.persistor}
            >
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </Container>
      </>
    );
  }
}

export default withReduxStore(MyApp);
