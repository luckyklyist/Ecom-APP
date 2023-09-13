"use client"

import { createContext, useState } from "react";

interface CartContext {
    cart: CartItem[],
    addToCart: (product: object) => void,
    totalCart?:number;
}

interface CartItem{
    _id: string,
    productName: string,
}

export const CartContext = createContext<CartContext|null>(null);

export const CartProvider:React.FC<{children:React.ReactNode}>=({ children })=> {
    const [cart,setCartName]=useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCartName([...cart,product]);
    }
    return (
        <CartContext.Provider value={{cart,addToCart}}>  {children}  </CartContext.Provider>
    )
}


