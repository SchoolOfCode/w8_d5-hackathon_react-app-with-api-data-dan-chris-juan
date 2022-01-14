import React from "react";
import { useState } from "react";
import { handleText } from "../App.js";

function Input() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleText({ text });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
