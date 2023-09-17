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
}

interface OrdersResponse {
  message: string;
  data: Order[];
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

  return <div>Weclome to the order page</div>;
}
