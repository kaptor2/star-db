import React from "react";
import "./ErrorIndecator.css";

export const ErrorIndecator = ( {code} ) => {
  return (
  <div className="ErrorIndecator">
    <span>Oooooops... =(</span>
    <span>Something went wrong</span>
    <span>{ code.toString() }</span>
  </div>
  );
};
