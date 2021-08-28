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

  addItem = (inputText) => {
    const list = [...this.state.list];
    list.push(inputText);
    this.setState({ list });
  };

  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter((item, index) => index !== id);
    this.setState({ list: updatedList });
  };

  render() {
    const { list } = this.state;
    const { addItem, deleteItem } = this;

    return (
      <div className="App">
        <InputField onAdd={addItem} />
        <ItemList onDisplay={list} onDelete={deleteItem} />
      </div>
    );
  }
}

export default TdList;
