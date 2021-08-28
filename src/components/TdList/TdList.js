import React, { Component } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";

class TdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Study React", "Do Homework"],
    };
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1> TO-DO LIST </h1>
        <InputField />
        <ItemList todo={list} />
      </div>
    );
  }
}

export default TdList;