"use client";
import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.provider";

interface CartItem {
  productId: number;
  productName: string;
  price: number;
  imageUrl: string;
}

const CartPage: React.FC = () => {
  const { deleteFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const subtotal = calculateTotal(cartItems);

  React.useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-8">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex flex-col md:flex-row border-b border-gray-400 py-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.productName}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{item.productName}</h2>
                <p className="mt-2 text-gray-600">Product Description</p>
                <div className="mt-4">
                  <span className="font-bold">${item.price}</span>
                </div>
                <div>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => deleteFromCart(item.productId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

function calculateTotal(cartItems: CartItem[]) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

export default CartPage;
