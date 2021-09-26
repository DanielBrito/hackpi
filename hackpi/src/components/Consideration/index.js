import React from "react";

import "./styles.css";

const Consideration = ({ text }) => {
  return (
    <div className="consideration-wrapper">
      <p className="consideration-text">{text}</p>
    </div>
  );
};

export default Consideration;
