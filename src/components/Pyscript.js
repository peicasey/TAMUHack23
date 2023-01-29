import React from "react";

export class PyScript extends React.Component {
  render() {
    return React.createElement("py-script", null, this.props.children);
  }
}
