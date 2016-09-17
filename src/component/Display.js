import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.PureComponent {
  static propTypes = {
    getValue: PropTypes.func,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.getValue()}</div>
      </div>
    );
  }
}
