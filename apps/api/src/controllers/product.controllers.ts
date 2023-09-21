import { Request, Response } from "express";
import Product from "../models/product.model";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, price, productDescription, imageUrl } = req.body;
    const newProduct = new Product({
      productName,
      price,
      productDescription,
      imageUrl,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productName, price, productDescription, imageUrl } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName,
        price,
        productDescription,
        imageUrl,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

const postComments = async (req: Request, res: Response) => {
  try {
    const { comment } = req.body;
    const user = req.user;

    if (!comment || !user) {
      return res.status(400).json({ error: "Invalid comment data" });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.comments.push({
      user,
      comment,
    });

    const updatedProduct = await product.save();

    res
      .status(201)
      .json({ message: "Comment added successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  postComments,
};
