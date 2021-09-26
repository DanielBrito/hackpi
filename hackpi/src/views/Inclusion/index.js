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
      <Consideration
        texts={[
          "(EP_EQ31) - Aproximadamente 63% dos professoress não sentem-se preparados para educar crianças com deficiência, TEA ou altas habilidades.",
          "(OD_Q2) - Há 90 alunos que possuem algum tipo de diversidades funcionais, transtornos globais do desenvolvimento, altas habilidades ou superdotação na amostragem.",
          "(ED_Q63_EXTRA e ED_Q74) - A relação criança com deficiência x profissional dedicado em termos de amostragem geral, ficou aproximadamente de 5 para 1, respectivamente.",
          "Conclusão: Como os dados nos mostram, há carência de profissionais capacitados para lidar com crianças com algum tipo de deficiência. Também é notório que não se dispõe de um número suficiente de profissionais dedicados para atender a demanda.",
        ]}
      />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Inclusion;
