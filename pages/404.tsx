import Link from "next/link";
import { Fragment } from "react";
import Layout from "../components/Layout";

const FourOhFour = () => {
  return (
    <Fragment>
      <Layout title={`findsongbpm.com-Page not found`}>
        <div className="uk-position-center">
          <h1 className="uk-text-bold">404 - Page Not Found</h1>
          <Link href="/">
            <a>Go back home</a>
          </Link>
        </div>
      </Layout>
    </Fragment>
  );
};

export default FourOhFour;
