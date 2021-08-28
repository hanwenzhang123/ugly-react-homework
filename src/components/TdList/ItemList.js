import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <div className="App">
      {props.onDisplay.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default ItemList;
