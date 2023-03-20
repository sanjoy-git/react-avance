import React from 'react'
import { useCart } from "react-use-cart";

export default function Card(props) {
  const { addItem } = useCart();
  const {product}=props;
  return (
    <div>
      <button onClick={() => addItem(product)}>Add to cart</button>
    </div>
  )
}
