import React, { Component } from "react";
import "./ItemList.css";
import { Items } from "../Items/Items.js";
import { SwapiPeople } from "../../services/SwapiPeople";
import { Spinner } from "../Spinner/Spinner.js";

export class ItemList extends Component {
  service = new SwapiPeople();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.service.getAllPeoples().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems(peoples) {
    return peoples.map(({ id, name }) => {
      return (
        <Items
          key={id}
          ids={id}
          name={name}
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          click={this.props.onItemSelected}
          active={this.props.id == id}
        />
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);
    return <ul className="ItemList">{items}</ul>;
  }
}
