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
      <Consideration
        texts={[
          "(EP_Q36) - Aproximadamente 49% da amostragem mostrou que o município está promovendo as condições para o desenvolvimento integral das crianças, porém relatam que poderia ser melhor.",
          "(ED_Q21) - A amostragem mostrou que  o município está promovendo as condições para o desenvolvimento integral das crianças.",
          "Conclusão: No geral, há a promoção das condições por parte do município, porém cabe analisar onde poderia ser melhor, visto que a visão dos professores ficaram distintas dos diretores.",
        ]}
      />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Development;
