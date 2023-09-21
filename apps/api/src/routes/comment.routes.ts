import express, { Request, Response } from "express";
import validateToken from "../middlewares/validateToken";
import productController from "../controllers/product.controllers";
const router = express.Router();

router.post("/:id", validateToken, productController.postComments);

export default router;
