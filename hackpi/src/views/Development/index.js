import React from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";

import answers from "../../data/sample4.json";

const Development = () => {
  return (
    <>
      <Header />
      <Subtitle text={"Desenvolvimento"} />
      <BarChart payload={answers} />
    </>
  );
};

export default Development;
