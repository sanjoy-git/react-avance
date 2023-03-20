import React from 'react'
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div>
      {totalUniqueItems}
      {console.warn(items)}
    </div>
  )
}
