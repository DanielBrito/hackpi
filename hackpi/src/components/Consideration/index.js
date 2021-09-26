import React from "react";

import "./styles.css";

const Consideration = ({ texts }) => {
  return (
    <div class="consideration-wrapper">
      <div className="consideration">
        {texts.map((text, index) => (
          <p className="consideration-text" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Consideration;
