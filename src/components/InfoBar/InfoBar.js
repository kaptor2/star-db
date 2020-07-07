import React, { Component } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "./InfoBar.css";

export class InfoBar extends Component {
  render() {
    return (
      <div className="InfoBar">
        <h2>{ this.props.name }</h2>
        <CircularProgressbar
          value={this.props.text}
          text={this.props.text}
          styles={{ 
              path: { stroke: `#0F9D90` } ,
              trail: { stroke: 'white'},
            }}
        />
      </div>
    );
  }
}
