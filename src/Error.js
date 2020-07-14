import React from "react";
import { ErrorIndecator } from "./components/ErrorIndecator/ErrorIndecator";

export class Error extends React.Component {
  state = { error: false };

  componentDidCatch(error) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndecator />;
    }
    return this.props.children;
  }
}
