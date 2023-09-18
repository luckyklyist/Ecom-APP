import { Request, Response } from "express";
import stripePackage from "stripe";
import { Router } from "express";
import config from "../config/developement.cofig";
import Order from "../models/order.model";
import Product from "../models/product.model";

const router = Router();

const stripe = stripePackage(config.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const { orderId } = req.body;
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  let products = [];
  for (const productItem of order.productsCart) {
    const product = await Product.findOne({ _id: productItem.product });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    products.push(product);
  }

  let line_items = products.map((item) => {
    console.log(item);
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          images: [item.imageUrl],
          description: item.productDescription,
          metadata: {
            id: orderId,
          },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${config.CLIENT_URL}/checkout-success`,
    cancel_url: "http://localhost:3000/cart/",
  });
  res.send({ url: session.url });
});

export default router;
