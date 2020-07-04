import React, { useState, useEffect } from "react";
import "./styles.css";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import Grid from "./Components/Grid/Grid";
import AppProvider from "./Context/AppContext";
const initState = `3 4
1 2 3 4
5 6 7 8
9 10 11 12`;

export default function App() {
  const [input, setInput] = useState(initState);
  const [arr, setArr] = useState([]);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [err, setErr] = useState(false);
  const handleUpdateArr = () => {
    try {
      setErr(false);
      let data = input.split("\n");
      const [m, n] = data[0].split(" ").map(Number);
      data.shift();
      data = data.map(row => row.split(" "));

      if (!m || !n || !data) {
        throw new Error("Please enter data in proper format");
      }
      setRow(m);
      setCol(n);
      setArr(data);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <AppProvider>
      <div className="App">
        {err && "Please enter data in proper format"}
        <InputBox state={[input, setInput]} />
        <Button handleClick={handleUpdateArr} />
        <h2>Click on the button to see some magic happen!</h2>
        {arr.length !== 0 && <Grid array={arr} />}
      </div>
    </AppProvider>
  );
}
