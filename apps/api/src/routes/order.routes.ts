import express from "express";
import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
  checkUserHaveOrder,
} from "../controllers/order.controllers";
import validateToken from "../middlewares/validateToken";
const router = express.Router();

router.get("/", validateToken, getOrders);
router.post("/", validateToken, createOrder);
router.put("/:id", validateToken, updateOrder);
router.delete("/:id", validateToken, deleteOrder);
router.get("/order-status", validateToken, checkUserHaveOrder);

export default router;
