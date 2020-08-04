import React, { useState, useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeCartItems } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeCartItems(item.id)}
        ref={ref}
      ></i>

      <img src={item.url} width="130px" />
      <p>Rs. 599</p>
    </div>
  );
}

export default CartItem;
