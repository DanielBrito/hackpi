import React, { useEffect } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Consideration from "../../components/Consideration";

const Learning = () => {
  useEffect(() => {
    document.title = "HackPI - Acompanhamento e aprendizagem";
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Acompanhamento de aprendizagem"} />
      <Consideration texts={[]} />
    </>
  );
};

export default Learning;
