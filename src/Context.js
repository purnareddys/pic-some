import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [pics, setPics] = useState([]);

  return (
    <Context.Provider value={{ pics: pics }}>{props.children}</Context.Provider>
  );
};

export { ContextProvider, Context };
