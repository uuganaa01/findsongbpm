import React from "react";
import Link from "next/link";

type Props = {};

const Topbar = ({}: Props) => {
  return (
    <nav className="uk-margin-remove-bottom uk-align-center" style={{ background: "#2b2d42" }}>
      <a href="/" className="uk-navbar-item uk-logo">
        <svg
          width="39"
          height="45"
          viewBox="0 0 28 34"
          xmlns="http://www.w3.org/2000/svg"
          className="uk-margin-small-right uk-svg"
          // data-svg="../images/uikit-logo.svg"
        >
          <polygon
            fill="#fff"
            points="19.1,4.1 13.75,1 8.17,4.45 13.6,7.44 "
          ></polygon>
          <path
            fill="#fff"
            d="M21.67,5.43l-5.53,3.34l6.26,3.63v9.52l-8.44,4.76L5.6,21.93v-7.38L0,11.7v13.51l13.75,8.08L28,25.21V9.07 L21.67,5.43z"
          ></path>
        </svg>
      </a>
    </nav>
  );
};

export default Topbar;
