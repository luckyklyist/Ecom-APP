"use client";

import { createContext, useState } from "react";

interface CartContext {
  cart: CartItem[];
  addToCart: (product: object) => void;
  totalCart?: number;
}

interface CartItem {
  _id: string;
  productName: string;
}

export const CartContext = createContext<CartContext | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCartName] = useState<CartItem[]>([
    { _id: "1", productName: "test" },
    { _id: "2", productName: "test2" },
    { _id: "3", productName: "test3" },
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
