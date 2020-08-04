import React, { useContext } from "react";
import { Context } from "../Context";
function CartItem({ item }) {
  const { removeCartItems } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItems(item.id)}
        className="ri-delete-bin-line"
      ></i>
      <img src={item.url} alt="img" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
