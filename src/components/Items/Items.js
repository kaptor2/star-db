import React from "react";
import "./Items.css";

export class Items extends React.Component {
  state = {
    active: this.props.active,
  };

  element = (src) => {
    return src ? (
      <img className="Items_img" src={`${src}`} />
    ) : (
      <i className="fas fa-jedi Items_img"></i>
    );
  };

  render() {
    const { ids, name, src, click } = this.props;

    return (
      <li
        className={`Items ${this.state.active ? "Items_active" : "Items_h"}`}
        onClick={() => {
          return click(ids);
        }}
      >
        {this.element(src)}
        <span>{name}</span>
      </li>
    );
  }
}
