import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCartStatus] = useState(false)

  function handleAddToCard() {
    console.log("Clicked add to cart")
    setCartStatus(!inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      { inCart ? <button className="in-cart" onClick={handleAddToCard}>Remove From Cart</button> : <button className="add" onClick={handleAddToCard}>Add to Cart</button> }
    </li>
  );
}

export default Item;
