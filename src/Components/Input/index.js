import React from "react";
import { useState } from "react";

function Input({ handleClick }) {
  const [text, setText] = useState("");

  return (
    <div id="search">
      <input
        class="hvr-grow"
        placeholder="Search a location"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        class="hvr-grow
      }"
        onClick={() => {
          handleClick(text);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
