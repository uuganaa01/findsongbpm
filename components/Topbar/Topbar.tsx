import React from "react";
import Link from "next/link";

type Props = {};

const Topbar = ({}: Props) => {
  return (
    <nav
      className="uk-margin-remove-bottom uk-align-center"
      style={{ background: "#14213d" }}
    >
      <a href="/" className="uk-navbar-item uk-logo">
        <svg
          id="logo"
          data-name="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          viewBox="0 0 267.22 206.04"
        >
          <path
            style={{ fill: "#f5f5f5" }}
            d="M258.33,206H221.08a7.15,7.15,0,0,1-6.17-3.56L147,84.91a15.51,15.51,0,0,0-26.86,0L52.3,202.48A7.12,7.12,0,0,1,46.14,206H8.89A8.88,8.88,0,0,1,1.2,192.73l62.36-108L101.91,18.3c14.09-24.4,49.31-24.4,63.4,0l38.34,66.42,62.36,108A8.87,8.87,0,0,1,258.33,206Z"
          />
          <path
            style={{ fill: "#f5f5f5" }}
            d="M124.2,144.64a10.87,10.87,0,0,1,18.82,0l13,22.55,15.55,26.93A7.94,7.94,0,0,1,164.7,206H102.52a7.94,7.94,0,0,1-6.88-11.92l15.54-26.93Z"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Topbar;
