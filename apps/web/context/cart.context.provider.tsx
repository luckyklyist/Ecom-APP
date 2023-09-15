import { createContext, useEffect, useState } from "react";
import { Navbar } from "ui";
import NavBarLayout from "../components/NavBar";

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
  const initialstate = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCartName] = useState<CartItem[]>(initialstate);

  const addToCart = (product: CartItem) => {
    setCartName((prev) => {
      const newCart = [...prev, product];
      return newCart;
    });
  };

  const totalCart = cart.length;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, addToCart, totalCart }}>
      <NavBarLayout totalCart={totalCart} />
      {children}
    </CartContext.Provider>
  );
};
