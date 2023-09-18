import express from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import cartRoutes from "./cart.routes";
import orderRoutes from "./order.routes";
import paymentRoutes from "./payment.routes";

const routes = express.Router();

routes.use("/user", userRoutes);
routes.use("/products", productRoutes);
routes.use("/cart", cartRoutes);
routes.use("/order", orderRoutes);
routes.use("/payment", paymentRoutes);

export default routes;
