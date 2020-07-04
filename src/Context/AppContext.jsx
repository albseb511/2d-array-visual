import React, { useState, createContext } from "react";

export const AppContext = createContext();

const AppProvider = props => {
  const [currRow, setCurrRow] = useState(1);
  const [currCol, setCurrCol] = useState(0);

  const context = { currRow, currCol, setCurrRow, setCurrCol };
  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
