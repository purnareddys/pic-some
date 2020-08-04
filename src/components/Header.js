import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
function Header() {
  const { cartItems } = useContext(Context);
  let toClassName;
  if (cartItems.length > 0) {
    toClassName = "ri-shopping-cart-fill ri-fw ri-2x";
  } else {
    toClassName = "ri-shopping-cart-line ri-fw ri-2x";
  }
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className={toClassName}></i>
      </Link>
    </header>
  );
}

export default Header;
