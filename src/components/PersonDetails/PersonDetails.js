import React, { Component } from "react";
import "./PersonDetails.css";
import { Spinner } from "../Spinner/Spinner";

export class PersonDetails extends Component {


  state = {
    id: null,
    people: null,
    status: "loading", // loading, show
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps){
    if (prevProps.id != this.props.id) {
      this.updateItem();
    }
  }

  updateItem() {
    let { id, getData } = this.props;
    this.setState({status:"loading"})
    if (!id) {
      id = 1;
    }

    getData(id).then((people) => {
      this.setState({ id, people, status:"show" });
    });
  }

  render() {
    if (!this.state.people || this.state.status == "loading") {
      return <Spinner />;
    }

    const { id, name, birth_year, gender, height, url } = this.state.people;

    return (
      <div className="PersonDetails">
        <div>
          <img
            src={ url }
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