import React, { Component } from "react";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleClick = () => {
    this.props.onAdd(this.state.inputText);
    this.setState({
      inputText: "",
    });
  };

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <div>
        <h1> TO-DO LIST </h1>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Task"
          value={this.state.inputText}
        />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default InputField;
