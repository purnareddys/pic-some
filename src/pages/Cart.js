import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";
function Cart() {
  const { cartItems } = useContext(Context);
  console.log(cartItems);
  const imageElements = cartItems.map((item, i) => (
    <Image key={item.id} className={getClass(i)} img={item} />
  ));
  return (
    <main className="cart-page">
      {!cartItems ? <h1>No Items in the cart</h1> : imageElements}
    </main>
  );
}

export default Cart;
