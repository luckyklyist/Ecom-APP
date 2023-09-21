import express from "express";
import productController from "../controllers/product.controllers";
import { validatePayload } from "../middlewares/validateSchema";
import {
  productSchema,
  updateProductSchema,
} from "../validations_schema/product.schema";

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post(
  "/",
  validatePayload(productSchema),
  productController.createProduct
);
router.put(
  "/:id",
  validatePayload(updateProductSchema),
  productController.updateProduct
);
router.delete("/:id", productController.deleteProduct);

export default router;
