import React from "react";
import "./RandomPlanetContent.css";
import { InfoBar } from "../InfoBar/InfoBar";
import back from "../../media/backgrounRandomPlanet.png";

export const RandomPlanetContent = (props) => {
  const { name, diameter, population, orbital_period, gravity } = props.planet;
  const style = { background: `url(${back})` };
  return (
    <div className="RandomPlanetContent" style={style}>
      <h2 className="RandomPlanetContent_title">{name}</h2>
      <div className="RandomPlanetContent_InfoBars">
        <InfoBar text={diameter} name="Diameter" />
        <InfoBar text={population} name="Population" />
        <InfoBar text={orbital_period} name="Orbital period" />
        <InfoBar text={gravity} name="Gravity" />
      </div>
    </div>
  );
};
