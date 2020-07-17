import React, { Component } from "react";
import "./Details.css";
import { Spinner } from "../Spinner/Spinner";

export class Details extends Component {

  state = {
    id: null,
    item: null,
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

    getData(id).then((item) => {
      this.setState({ id, item, status:"show" });
    });
  }

  render() {
    if (!this.state.item || this.state.status == "loading") {
      return <Spinner />;
    }

    const { name, url } = this.state.item;
    const item = this.state.item;

    return (
      <div className="PersonDetails">
        <div>
          <img
            src={ url }
          ></img>
        </div>
        <h3>{`${name}`}</h3>
        <ul>
          {
            React.Children.map(this.props.children, (child) =>{
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    );
  }
}