import { getTokenCookie } from "./cookieUtils";

export async function checkOrderStatus() {
  try {
    const token = getTokenCookie();
    const resp = await fetch(
      "http://localhost:3004/api/v1//order/order-status",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();
    if (data.status) {
      return data.status;
    } else {
      return data.status;
    }
  } catch (error) {
    console.log(error);
  }
}
