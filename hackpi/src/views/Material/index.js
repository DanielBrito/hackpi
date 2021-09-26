import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";
import Consideration from "../../components/Consideration";

import { getMaterial } from "../../service/dataService";

const Material = () => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    document.title = "HackPI - Material";

    const loadData = async () => {
      let data = await getMaterial();
      setAnswers(data);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Material"} />
      <Consideration text={"Considerações..."} />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Material;
