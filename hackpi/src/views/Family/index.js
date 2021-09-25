import React from "react";

import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

import "./styles.css";

const Family = () => {
  return (
    <>
      <Header />
      <div id="subtitle">
        <h2>Família</h2>
      </div>
      <BarChart />
    </>
  );
};

export default Family;
