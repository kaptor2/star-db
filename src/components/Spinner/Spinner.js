import React from "react";
import "./Spinner.css";
import spinnerSvg from "../../media/spinner.svg"

export const Spinner = () => {
  return <div className="Spinner">
    <img src={ spinnerSvg}/>
  </div>;
};
