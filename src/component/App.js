import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  getValue = () => this.state.next || this.state.total || "0";

  render() {
    return (
      <div className="component-app">
        <Display getValue={this.getValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
