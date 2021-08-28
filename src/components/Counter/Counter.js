import React, { Component } from "react";
import Count from "./Count";
import ButtonRow from "./ButtonRow";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
  };

  render() {
    const { number } = this.state;

    return (
      <div className="App">
        <h1> COUNTING </h1>
        <Count num={number} />
        <ButtonRow clickHandler={this.increment} value="+1" />
        <ButtonRow clickHandler={this.decrement} value="-1" />
      </div>
    );
  }
}

export default Counter;
