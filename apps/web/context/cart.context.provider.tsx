"use client";

import { createContext, useState } from "react";

interface CartContext {
  cart: CartItem[];
  addToCart: (product: object) => void;
  totalCart?: number;
}

interface CartItem {
  productId:number;
}

export const CartContext = createContext<CartContext | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCartName] = useState<CartItem[]>([
    { productId:1 },
    { productId:2},
    { productId:3 },
  ]);

  const addToCart = (product: CartItem) => {
    setCartName([...cart, product]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
