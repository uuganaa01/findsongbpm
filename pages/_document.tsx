import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.7/dist/css/uikit.min.css" /> */}
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.14/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.16/dist/js/uikit-icons.min.js"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
