import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [pics, setPics] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    //get the images and save the data
    axios
      .get(url)
      .then((Response) => {
        setPics(Response.data);
      })
      .catch((error) => {
        console.log("Failed to Fetch Images");
      });
  }, []);

  return (
    <Context.Provider value={{ pics: pics }}>{props.children}</Context.Provider>
  );
};

export { ContextProvider, Context };
