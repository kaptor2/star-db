import React, { Component } from "react";
import "./ItemList.css";
import { Items } from "../Items/Items.js";
import { Spinner } from "../Spinner/Spinner.js";

export class ItemList extends Component {

  state = {
    item: null,
  };

  componentDidMount() {

    const { getData } = this.props;

    getData().then(( item ) => {
      this.setState({ item });
    });
  }

  renderItems(item) {
    return item.map(({ id, name, url }) => {
      return (
        <Items
          key={id}
          ids={id}
          name={name}
          src={ url }
          click={this.props.onItemSelected}
          active={this.props.id == id}
        />
      );
    });
  }

  render() {
    const { item } = this.state;
    console.log(item)
    if (!item) {
      return <Spinner />;
    }

    const Myitem = this.renderItems(item);
    return <ul className="ItemList">{Myitem}</ul>;
  }
}
