import React, { useEffect } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";
import Consideration from "../../components/Consideration";

const Security = () => {
  useEffect(() => {
    document.title = "HackPI - Segurança";
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Segurança"} />
      <Consideration text={"Considerações..."} />
    </>
  );
};

export default Security;
