import React from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";

import answers from "../../data/payload3.json";

const ChildrenSpace = () => {
  return (
    <>
      <Header />
      <Subtitle text={"Espaço para crianças"} />
      <BarChart payload={answers} />
    </>
  );
};

export default ChildrenSpace;
