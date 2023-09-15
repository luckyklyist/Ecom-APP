"use client";

import { createContext, useState } from "react";
import { Navbar } from "ui";

interface CartContext {
  cart: CartItem[];
  addToCart: (product: object) => void;
  totalCart: number;
}

interface CartItem {
  productId: number;
  productName: string;
  price: number;
  imageUrl: string;
}

export const CartContext = createContext<CartContext | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCartName] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartName([...cart, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const totalCart = cart.length;
  return (
    <CartContext.Provider value={{ cart, addToCart, totalCart }}>
      <Navbar totalCart={totalCart} />
      {children}
    </CartContext.Provider>
  );
};
