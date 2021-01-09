import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import Topbar from "./Topbar/Topbar";
import Footer from "./Footer/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="height=device-height,  width=device-width, initial-scale=1,  minimum-scale=1"
        />
        <meta name="msapplication-TileColor" content="#0a0a0a"></meta>
        <meta name="theme-color" content="#4361ee"></meta>
        <link rel="manifest" href="manifest.json" />
        <meta charSet="utf-8" />
        <meta property="og:url" content="https://findsongbpm.com/" />
      </Head>
      <div className="tm-main uk-section">
        <div className="uk-container uk-container-small">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
