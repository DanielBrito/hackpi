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
      <Consideration
        texts={[
          "(ED_Q96) - Aproximadamente 45% dos materiais não recebem manutenção ou são repostos quando necessário, enquanto o restante só é trocado às vezes.",
          "(ED_Q99) - Aproximadamente 55% dos diretores considera que os recursos são insuficientes.",
          "Conclusão: Como os dados nos mostram, muitos dos materiais não são trocados quando necessários, pela falta de recursos que são repassados as escolas.",
        ]}
      />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Material;
