import React, { useState, useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";
const Image = ({ className, img }) => {
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const {
    toggleFavorite,
    addCartItems,
    cartItems,
    removeCartItems,
  } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }
  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeCartItems(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addCartItems(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} alt="Images" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};
export default Image;
