import express, { Request, Response } from "express";
import validateToken from "../middlewares/validateToken";
import productController from "../controllers/product.controllers";
const router = express.Router();

router.post("/:id", validateToken, productController.postComments);
router.put("/:id/:commentId", validateToken, productController.updateComments);
router.delete(
  "/:id/:commentId",
  validateToken,
  productController.deleteComments
);

export default router;
