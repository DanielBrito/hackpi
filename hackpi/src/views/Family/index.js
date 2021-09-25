import React from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";

import answers from "../../data/sample1.json";

const Family = () => {
  return (
    <>
      <Header />
      <Subtitle text={"Família"} />
      <BarChart payload={answers} />
    </>
  );
};

export default Family;
