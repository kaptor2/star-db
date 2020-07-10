import React, { Component } from "react";
import "./RandomPlanet.css";
import { SwapiPlanet } from "../../services/SwapiPlanet.js";
import { Spinner } from "../Spinner/Spinner";
import { ErrorIndecator } from "../ErrorIndecator/ErrorIndecator";
import { RandomPlanetContent } from "../RandomPlanetContent/RandomPlanetContent";

export class RandomPlanet extends Component {
  service = new SwapiPlanet();
  state = {
    planet: {},
    status: "loading", // error, show, unshow, loading
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 2500);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, status: "show" });
  };

  onError = (err) => {
    this.setState({ status: "error" });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.service.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    const { status, planet } = this.state;

    switch (status) {
      case "loading" : return  <Spinner />;
      case "error" : return  <ErrorIndecator />;
      case "show" : return  <RandomPlanetContent planet={planet} />;
      default: return <ErrorIndecator />;
    }
  }
}
