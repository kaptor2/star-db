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
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet,2500);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ error: err });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.service.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  }

  render() {
    const { loading, error, planet } = this.state;
    if (error) return <ErrorIndecator code={error} />;
    if (loading) return <Spinner />;
    return <RandomPlanetContent planet={planet} />;
  }
}
