import React from "react";
import "./Items.css";

export const Items = ({ name, src }) => {
  let element = () => {
    return src ? (
      <img className="Items_img" src={`${src}`} />
    ) : (
      <i className="fas fa-jedi Items_img"></i>
    );
  };

  return (
    <li className="Items">
      {element()}
      <span>{name}</span>
    </li>
  );
};
