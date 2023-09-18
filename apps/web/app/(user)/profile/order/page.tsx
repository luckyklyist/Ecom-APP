import { cookies } from "next/headers";

interface Order {
  _id: string;
  user: string;
  productsCart: { product: string }[];
  paymentStatus: boolean;
  orderStatus: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCost: number;
}

interface OrdersResponse {
  message: string;
  data: Order;
}

export default async function OrderPage() {
  const orderDataUser = async () => {
    try {
      const cookieStore = cookies();
      const token = cookieStore.get("token").value;
      const response = await fetch("http://localhost:3004/api/v1/order", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const orderData = await orderDataUser();

  console.log(orderData, "these are the order data");

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">
            Order <span className="text-yellow-500">Pending</span>
          </h1>
        </div>
        <div className="mt-8 bg-gray-800 p-5 rounded-lg">
          Total Cost :{" "}
          <span className="font-bold">${orderData.data.totalCost}</span>
          <span className="ml-2 text-yellow-500">
            (Complete order with stripe)
          </span>
        </div>
        <div>
          <div className="mt-4 flex justify-end items-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded
            "
              // onClick={() => sentOrder(cart)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
