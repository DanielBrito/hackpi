import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import BarChart from "../../components/BarChart";
import Consideration from "../../components/Consideration";

import { getChildrenSpace } from "../../service/dataService";

const ChildrenSpace = () => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    document.title = "HackPI - Espaço para crianças";

    const loadData = async () => {
      let data = await getChildrenSpace();
      setAnswers(data);
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Espaço para crianças"} />
      <Consideration texts={[]} />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default ChildrenSpace;
