import React, { useState } from "react";
import { text } from "./App.module.css";

const InputBox = ({ state }) => {
  const [input, setInput] = state;
  return (
    <div>
      {" "}
      <textarea
        className={text}
        placeholder="enter your custom input"
        value={input}
        onChange={e => setInput(e.target.value)}
      />{" "}
    </div>
  );
};

export default InputBox;
