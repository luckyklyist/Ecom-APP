import express from "express";
import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/order.controllers";
import validateToken from "../middlewares/validateToken";
const router = express.Router();

router.get("/", validateToken, getOrders);
router.post("/", validateToken, createOrder);
router.put("/:id", validateToken, updateOrder);
router.delete("/:id", validateToken, deleteOrder);

export default router;
