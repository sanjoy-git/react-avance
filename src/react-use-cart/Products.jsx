import React from 'react'
import { useCart } from "react-use-cart";
import Card from './Card';
import Cart from './Cart';

export default function Products() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <Card product={p}/>
        </div>
      ))}
      <Cart/>
    </div>
  )
}
