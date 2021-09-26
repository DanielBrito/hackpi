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
      <Consideration
        texts={[
          "(EP_Q76) - Quase 33% dos professores não recebem treinamento para prevenir problemas de saúde física.",
          "(EP_Q77) - Apenas 2% recebe treinamento de primeiros socorros anualmente.",
          "(OD_Q120 - OD_Q130) - Mais de 80% das creches não apresentam condições de segurança.",
          "Conclusão: Como os dados nos mostram,a maioria dos profissionais não recebem treinamento para prevenir problemas fisicos, ou atendimento de primeiros socorros.",
        ]}
      />
      {answers !== null && <BarChart payload={answers} />}
    </>
  );
};

export default Security;
