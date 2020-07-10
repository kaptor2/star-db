import React, {Component} from "react";
import "./PersonDetails.css";
import { SwapiPeople } from "../../services/SwapiPeople";
import { Spinner } from "../Spinner/Spinner";

export class PersonDetails extends Component {
  service = new SwapiPeople();

  state = {
    id: null,
    people: null,
  };

  componentDidMount() {
    this.updatePeople();
  }

  componentWillUpdate() {
   
  }

  updatePeople() {
    let { id } = this.props;
    if (!id) {
      id = 1;
    }

    this.service.getPeople(id).then((people) => {
      this.setState({ id, people });
    });
  }

  renderItems({id, name, birth_year, gender, height }) {
    return (
      <ul>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>
        <li>{name}</li>
        <li>{birth_year}</li>
        <li>{gender}</li>
        <li>{height}</li>
      </ul>
    );
  }

  render() {
    const { people } = this.state;

    if(!people) {
      return <Spinner />;
    }

    const items = this.renderItems(people);
    return <div className="PersonDetails">{items}</div>;
  }
}