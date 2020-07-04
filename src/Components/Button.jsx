import React from "react";
import { button, mt2 } from "./App.module.css";

const Button = ({ handleClick }) => {
  const style = [button, mt2].join(" ");
  return (
    <div>
      <button className={style} onClick={handleClick}>
        SHOW ARRAY
      </button>
    </div>
  );
};

export default Button;
