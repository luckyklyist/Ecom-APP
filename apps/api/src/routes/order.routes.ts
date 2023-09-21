import express from "express";
import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
  checkUserHaveOrder,
} from "../controllers/order.controllers";
import validateToken from "../middlewares/validateToken";
import { validatePayload } from "../middlewares/validateSchema";
import { createOrderSchema } from "../validations_schema/order.schema";
const router = express.Router();

router.get("/", validateToken, getOrders);
router.post(
  "/",
  validatePayload(createOrderSchema),
  validateToken,
  createOrder
);
router.put("/:id", validateToken, updateOrder);
router.delete("/:id", validateToken, deleteOrder);
router.get("/order-status", validateToken, checkUserHaveOrder);

export default router;
