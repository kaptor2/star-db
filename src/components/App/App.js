import React from "react";
import "./App.css";
import { AppHeader } from "../Header/AppHeader";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet";
import { PersonDetails } from "../PersonDetails/PersonDetails";
import { ItemList } from "../ItemList/ItemList";
import back from "../../media/background-info.png";
import { SwapiPlanet } from "../../services/SwapiPlanet.js";
import { SwapiPeople } from "../../services/SwapiPeople.js";
import { Items } from "../Items/Items.js";
import { Error } from "../../Error.js";

export class App extends React.Component {
  swapiPeople = new SwapiPeople();
  swapiPlanet = new SwapiPlanet();

  state = { id: null };

  style = {
    background: `url(${back})`,
  };

  onItemSelected = (id) => {
    this.setState({ id });
  };

  renderItems = (item) => {
    return item.map(({ id, name, url }) => {
      return (
        <Items
          key={id}
          ids={id}
          name={name}
          src={url}
          click={this.onItemSelected}
        />
      );
    });
  };

  render() {
    const itemList = (
      <ItemList id={this.state.id} getData={this.swapiPeople.getAllPeoples}>
        {this.renderItems}
      </ItemList>
    );

    const details = <PersonDetails id={this.state.id} getData={ this.swapiPlanet.getPlanet}/>;

    return (
      <div className="App">
        <Error>
          <div className="App-content" style={this.style}>
            <AppHeader />
            <RandomPlanet />
            <Row list={itemList} detail={details} />
          </div>
        </Error>
      </div>
    );
  }
}

const Row = ({ list, detail }) => {
  return (
    <>
      {list}
      {detail}
    </>
  );
};
