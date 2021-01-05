import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import Topbar from "./Topbar/Topbar";

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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Topbar />
      <div className="tm-main uk-section" style={{ background: "#ebeef1" }}>
        <div className="uk-container uk-container-small">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
