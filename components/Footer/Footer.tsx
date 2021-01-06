import React from "react";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <nav className="uk-margin">
      <div className="uk-navbar uk-container uk-container-small">
        <div className="uk-navbar-left">© 2021 findsongbpm.com</div>
        <div className="uk-navbar-right">Powered by the Spotify Web API</div>
      </div>
    </nav>
  );
};

export default Footer;
