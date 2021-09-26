import React from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";

import answers from "../../data/payload2.json";

const Inclusion = () => {
  return (
    <>
      <Header />
      <Subtitle text={"Inclusão"} />
      <BarChart payload={answers} />
    </>
  );
};

export default Inclusion;
