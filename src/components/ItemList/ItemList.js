import React, { Component } from "react";
import "./ItemList.css";
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

  render() {
    const { item } = this.state;
    if (!item) {
      return <Spinner />;
    }

    const Myitem = this.props.children(item);
    return <ul className="ItemList">{Myitem}</ul>;
  }
}
