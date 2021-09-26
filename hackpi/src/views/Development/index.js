import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";
import Consideration from "../../components/Consideration";

import { getDevelopment } from "../../service/dataService";

const Development = () => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    document.title = "HackPI - Desenvolvimento";

    const loadData = async () => {
      let data = await getDevelopment();
      setAnswers(data);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Desenvolvimento"} />
      <Consideration text={"Considerações..."} />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Development;
