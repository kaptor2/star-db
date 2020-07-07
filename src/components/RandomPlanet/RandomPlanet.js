import React, { Component } from "react";
import "./RandomPlanet.css";
import { InfoBar } from "../InfoBar/InfoBar";
import back from "../../media/backgrounRandomPlanet.png";

export class RandomPlanet extends Component {
  style = {
    background: `url(${ back })`,
  };

  render() {
    return <div className="RandomPlanet" style={this.style}>
      <h2 className="RandomPlanet_title">Татуин</h2>
      <div className="RandomPlanet_InfoBars">
        <InfoBar text="25" name="diameter"/>
        <InfoBar text="25" name="population"/>
        <InfoBar text="25" name="orbital_period"/>
        <InfoBar text="25" name="gravity"/>
      </div>
    </div>;
  }
}
