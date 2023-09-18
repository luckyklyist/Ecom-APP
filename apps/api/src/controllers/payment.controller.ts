import { Request, Response } from "express";
import stripePackage from "stripe";
import { Router } from "express";
import config from "../config/developement.cofig";

const router = Router();

const stripe = stripePackage(config.STRIPE_SECRET_KEY);

router.post("/api/create-checkout-session", async (req, res) => {
  const { product } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Arrya Stark",
          },
          unit_amount: 3000,
        },
        quantity: 2,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/user/orders",
  });
  res.send({ url: session.url });
});

export default router;
