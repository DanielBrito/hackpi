import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Consideration from "../../components/Consideration";
import BarChart from "../../components/BarChart";

import { getSecurity } from "../../service/dataService";

const Security = () => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    document.title = "HackPI - Segurança";

    const loadData = async () => {
      let data = await getSecurity();
      setAnswers(data);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Segurança"} />
      <Consideration text={"Considerações..."} />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Security;
