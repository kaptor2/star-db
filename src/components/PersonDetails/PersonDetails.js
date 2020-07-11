import React, { Component } from "react";
import "./PersonDetails.css";
import { SwapiPeople } from "../../services/SwapiPeople";
import { Spinner } from "../Spinner/Spinner";

export class PersonDetails extends Component {
  service = new SwapiPeople();

  state = {
    id: null,
    people: null,
    status: "loading", // loading, show
  };

  componentDidMount() {
    this.updatePeople();
  }

  componentDidUpdate(prevProps){
    if (prevProps.id != this.props.id) {
      this.updatePeople();
    }
  }

  updatePeople() {
    let { id } = this.props;
    this.setState({status:"loading"})
    if (!id) {
      id = 1;
    }

    this.service.getPeople(id).then((people) => {
      this.setState({ id, people, status:"show" });
    });
  }

  render() {
    if (!this.state.people || this.state.status == "loading") {
      return <Spinner />;
    }

    const { id, name, birth_year, gender, height } = this.state.people;

    return (
      <div className="PersonDetails">
        <div>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          ></img>
        </div>
        <h3>{`${name}`}</h3>
        <ul>
          <li>
            <b>Birth: </b>
            {birth_year}
          </li>
          <li>
            <b>Gender: </b>
            {gender}
          </li>
          <li>
            <b>Height: </b>
            {height}
          </li>
        </ul>
      </div>
    );
  }
}