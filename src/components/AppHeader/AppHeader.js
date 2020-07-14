import React from 'react';
import './AppHeader.css';
import Logo from "../../media/Logo.png";

export const AppHeader = () => {
  return (
    <div className="AppHeader">
      <img className="AppHeader_logo" src={Logo} alt="STAR-DB"/>
      <div className="AppHeader_buttons">
        <a className="AppHeader--active AppHeader--btn">
          <i className="fas fa-users"/>
          <span>People</span>
        </a>
        <a className=" AppHeader--btn">
          <i className="fas  fa-globe-americas"/>
          <span>Planets</span>
        </a>
        <a className=" AppHeader--btn">
          <i className="fas fa-rocket"/>
          <span>Starship</span>
        </a>
      </div>
    </div>
  );
}
