import React from 'react';

 import { useState } from "react";

import "./styles.scss";

function MineSiteInput() {
  const [names] = useState([""]);

  return (
    <div className="mine-site-input">
      Mine Site Input
      {names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            id={`ore${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default MineSiteInput;