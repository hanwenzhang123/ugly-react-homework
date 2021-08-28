import React from "react";

const InputField = (props) => {
  return (
    <div>
      <h1> TO-DO LIST </h1>
      <input type="text" />
      <button>ADD</button>
    </div>
  );
};

export default InputField;

// import React, { useState } from "react";

// function InputField(props) {
//   const [inputText, setInputText] = useState("");

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function handleClick() {
//     props.onAdd(inputText);
//     setInputText("");
//   }

//   return (
//     <div>
//       <input onChange={handleChange} type="text" value={inputText} />
//       <button onClick={handleClick}>ADD</button>
//     </div>
//   );
// }

// export default InputField;
