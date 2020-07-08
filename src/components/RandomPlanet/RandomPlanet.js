import React, { Component } from "react";
import "./RandomPlanet.css";
import { InfoBar } from "../InfoBar/InfoBar";
import back from "../../media/backgrounRandomPlanet.png";
import { SwapiPlanet } from "../../services/SwapiPlanet.js";
import { Spinner } from "../Spinner/Spinner";

export class RandomPlanet extends Component {
  service = new SwapiPlanet();
  style = { background: `url(${back})` };
  state = { planet: {}, loading: true };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.service.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { name, diameter, population, orbital_period, gravity }, loading
    } = this.state;

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className="RandomPlanet" style={this.style}>
        <h2 className="RandomPlanet_title">{name}</h2>
        <div className="RandomPlanet_InfoBars">
          <InfoBar text={diameter} name="Diameter" />
          <InfoBar text={population} name="Population" />
          <InfoBar text={orbital_period} name="Orbital period" />
          <InfoBar text={gravity} name="Gravity" />
        </div>
      </div>
    );
  }
}
