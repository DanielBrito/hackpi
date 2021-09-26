import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";
import Consideration from "../../components/Consideration";

import { getInclusionData } from "../../service/dataService";

const Inclusion = () => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    document.title = "HackPI - Inclusão";

    const loadData = async () => {
      let data = await getInclusionData();
      setAnswers(data);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Inclusão"} />
      <Consideration text={"Considerações..."} />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Inclusion;
