import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
const { GA_TRACKING_ID } = process.env;

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.7/dist/css/uikit.min.css" /> */}
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.14/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.16/dist/js/uikit-icons.min.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2CZYMGR7TE"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
