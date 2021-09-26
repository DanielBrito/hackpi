import React, { useEffect } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";

const Security = () => {
  useEffect(() => {
    document.title = "HackPI - Segurança";
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Segurança"} />
    </>
  );
};

export default Security;
