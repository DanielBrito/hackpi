import React, { useEffect } from "react";

import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";

const Material = () => {
  useEffect(() => {
    document.title = "HackPI - Material";
  }, []);

  return (
    <>
      <Header />
      <Subtitle text={"Material"} />
    </>
  );
};

export default Material;
