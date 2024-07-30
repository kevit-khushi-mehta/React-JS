import React from "react";

import { Bars } from "react-loader-spinner";

import "./Loader.css";

const Loader = () => {
  return (
    
    <div className="loader-container">
      <Bars height="80" width="80" color="rgb(10, 62, 62)" ariaLabel="loading" />

    
    </div>
  );
};

export default Loader;
