"use client";
import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.provider";
import { getTokenCookie } from "../../utils/cookieUtils";
import { useRouter } from "next/navigation";
import { checkOrderStatus } from "../../utils/checkOrderStatus";
import Link from "next/link";

interface CartItem {
  productId: number;
  productName: string;
  price: number;
  imageUrl: string;
}

const CartPage: React.FC = () => {
  const router = useRouter();
  const { cart, deleteFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [token, setToken] = React.useState<string>("");
  const [orderStauts, setOrderStatus] = React.useState<boolean>(false);
  const subtotal = calculateTotal(cartItems);

  const sentOrder = (carts) => {
    try {
      const cartItem = carts.map((cart) => {
        return {
          product: cart.productId,
        };
      });
      console.log(cartItem);
      const token = getTokenCookie();
      fetch("http://localhost:3004/api/v1/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productsCart: cartItem }),
      })
        .then((res) => {
          if (res.ok) {
            router.push("/profile/order");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    setCartItems(cart);
    async function getStaus() {
      setOrderStatus(await checkOrderStatus());
    }
    getStaus();
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-8 bg-gray-800 p-5 rounded-lg">
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
        <div>
          <div className="flex justify-end items-center mt-8">
            <div className="flex">
              <span className="text-yellow-600 mr-4">Subtotal:</span>
              <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          {orderStauts ? (
            <div className="text-red-500">
              <p>You have an order in process</p>
              <Link
                href="/profile/order"
                className="text-blue-500 hover:underline text-sm underline"
              >
                process the checkout
              </Link>
            </div>
          ) : (
            <div className="mt-4 flex justify-end items-center">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
            "
                onClick={() => sentOrder(cart)}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function calculateTotal(cartItems: CartItem[]) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

export default CartPage;
