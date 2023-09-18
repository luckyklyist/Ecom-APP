"use client";

import { getTokenCookie } from "../../../../utils/cookieUtils";

export default function SendCheckOutBtn({ orderId }) {
  const sendCheckOut = async () => {
    try {
      const token = getTokenCookie();
      const resp = await fetch(
        "http://localhost:3004/api/v1/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ orderId }),
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        window.location.href = data.url;
      } else {
        console.log("HTTP Error:", resp.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="mt-4 flex justify-end items-center">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
            "
          onClick={() => sendCheckOut()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
