import React, { useEffect } from "react";
import {
  FaHandHoldingHeart,
  FaPencilRuler,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdChildCare } from "react-icons/md";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";

import "./styles.css";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "HackPI - Início";
  }, []);

  return (
    <>
      <Header />
      <div id="menu-wrapper">
        <button
          className="menu-button"
          onClick={() => history.push("/inclusion")}
        >
          <FaHandHoldingHeart className="icon" />
          Inclusão
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/material")}
        >
          <FaPencilRuler className="icon" />
          Material
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/security")}
        >
          <BsPersonCheckFill className="icon" />
          Segurança
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/children_space")}
        >
          <MdChildCare className="icon" />
          Espaço para crianças
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/learning")}
        >
          <FaChalkboardTeacher className="icon" />
          Acompanhamento de aprendizagem
        </button>
        <button
          className="menu-button"
          onClick={() => history.push("/development")}
        >
          <FaRocket className="icon" />
          Desenvolvimento
        </button>
      </div>
    </>
  );
};

export default Home;
