import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";

import "./styles.css";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <div id="menu-wrapper">
        <button
          className="menu-button"
          onClick={() => history.push("/inclusion")}
        >
          Inclusão
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/material")}
        >
          Material
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/security")}
        >
          Segurança
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/children_space")}
        >
          Espaço para crianças
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/learning")}
        >
          Aprendizagem
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/development")}
        >
          Desenvolvimento
        </button>
      </div>
    </>
  );
};

export default Home;
