import React from "react";
import "./App.css";
import { AppHeader } from "../Header/AppHeader";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet";
import { PersonDetails } from "../PersonDetails/PersonDetails";
import { ItemList } from "../ItemList/ItemList";
import back from "../../media/background-info.png";
import { SwapiPlanet } from "../../services/SwapiPlanet.js"
import { SwapiPeople } from "../../services/SwapiPeople.js"

export class App extends React.Component {

  service = new SwapiPlanet();

  state = { id: null };

  style = {
    background: `url(${back})`,
  };

  onItemSelected = (id) => {
    this.setState({ id });
  };

  render() {
    return (
      <div className="App">
        <div className="App-content" style={this.style}>
          <AppHeader />
          <RandomPlanet />
          <ItemList id ={this.state.id} getData={ this.service.getAllPlanets } onItemSelected={this.onItemSelected} />
          <PersonDetails id ={this.state.id}/>
        </div>
      </div>
    );
  }
}
