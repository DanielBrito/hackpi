import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import backIcon from "../../assets/back.png";

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
      <h1 id="header-title" onClick={() => history.push("/")}>
        HackPI
      </h1>
    </div>
  );
};

export default Header;
