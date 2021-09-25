import React from "react";

import "./styles.css";

const Consideration = ({ text }) => {
  return (
    <div id="consideration-wrapper">
      <p id="consideration-text">{text}</p>
    </div>
  );
};

export default Consideration;
