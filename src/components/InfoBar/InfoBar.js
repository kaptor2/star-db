import React, { Component } from "react";
import "./InfoBar.css";

export class InfoBar extends Component {

  render() {
    return (
      <div className="InfoBar">
        <h1>{`${this.props.name}:`}</h1>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}
