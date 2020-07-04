import React, { useState, useContext } from "react";
import { box, rowFlex } from "./Grid.module.css";
import { AppContext } from "../../Context/AppContext";
const Box = ({ label, active, row, col }) => {
  const { setCurrRow, setCurrCol } = useContext(AppContext);
  const handleClick = () => {
    setCurrCol(col);
    setCurrRow(row);
  };

  return active ? (
    <div className={box} style={{ background: "white" }}>
      {label}
    </div>
  ) : (
    <div className={box} onClick={handleClick}>
      {label}
    </div>
  );
};

const Row = ({ row, rowNo }) => {
  const { currRow, currCol } = useContext(AppContext);
  const isTrue = i => i === currCol && currRow === rowNo;
  return (
    <div className={rowFlex}>
      <div style={{ whiteSpace: "pre-line" }}>
        {currRow === rowNo &&
          `inner for loop \n i value: ${rowNo} \n j value: ${currCol}`}
      </div>
      {row.map((item, i) => (
        <Box key={i} active={isTrue(i)} label={item} row={rowNo} col={i} />
      ))}{" "}
    </div>
  );
};

const Grid = ({ array }) => {
  const { currRow } = useContext(AppContext);
  return (
    <div style={{ outline: "1px solid white" }}>
      {`outer for loop: i value: ${currRow}`}
      {array.map((row, i) => (
        <Row key={i} row={row} rowNo={i} />
      ))}
    </div>
  );
};

export default Grid;
