import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <div className="App">
      {props.todo.map((text, index) => (
        <Item key={index} text={text} />
      ))}
    </div>
  );
}

export default ItemList;
