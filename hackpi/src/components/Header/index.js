import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import backIcon from "../../assets/back.png";
import hackpiIcon from "../../assets/hackpi.png";

import "./styles.css";

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div id="header">
      {location.pathname !== "/" && (
        <img
          src={backIcon}
          id="back-icon"
          alt="Voltar"
          onClick={() => history.goBack()}
        />
      )}
      <div id="header-wrapper">
        <img src={hackpiIcon} id="hackpi-icon" alt="HackPI" />
        <h1 id="header-title" onClick={() => history.push("/")}>
          HackPI
        </h1>
      </div>
    </div>
  );
};

export default Header;
