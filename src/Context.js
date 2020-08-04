import React, { useState, useEffect } from "react";
import axios from "axios";
import Photos from "./pages/Photos";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [pics, setPics] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
  const toggleFavorite = (id) => {
    const updatedArr = pics.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPics(updatedArr);
  };

  const addCartItems = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeCartItems = (id) => {
    const newCartItems = cartItems.filter((item, index) => {
      return item.id !== id;
    });
    setCartItems(newCartItems);
  };
  console.log(cartItems);
  return (
    <Context.Provider
      value={{
        pics: pics,
        toggleFavorite,
        cartItems,
        addCartItems,
        removeCartItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
