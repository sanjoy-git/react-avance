import React from 'react'
import { CartProvider } from "react-use-cart";
import Products from './Products';

export default function UseCart() {
  return (
    <CartProvider>
      <Products/>    
    </CartProvider>
  )
}
