import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import TdList from "./components/TdList/TdList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Counter />
        <TdList />
      </React.Fragment>
    );
  }
}

export default App;
