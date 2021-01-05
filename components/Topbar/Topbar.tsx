import React from "react";
import Link from "next/link";

type Props = {};

const Topbar = ({}: Props) => {
  return (
    <div className="uk-navbar-container tm-navbar-container">
      <div className="uk-container uk-container-expand uk-light">
        <nav className="uk-navbar uk-align-center">
          <a href="/" className="uk-navbar-item uk-logo">
            findsongbpm
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
