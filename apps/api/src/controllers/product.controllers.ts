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

const updateComments = async (req: Request, res: Response) => {
  try {
    const { comment } = req.body;
    const user = req.user;

    console.log(req.params.commentId, "Comment ID");
    console.log(req.params.id, "product ID");

    if (!comment || !user) {
      return res.status(400).json({ error: "Invalid comment data" });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const commentIndex = product.comments.findIndex(
      (comment) => comment._id.toString() === req.params.commentId
    );

    if (commentIndex === -1) {
      return res.status(404).json({ error: "Comment not found" });
    }

    if (
      product.comments[commentIndex].user.toString() !== user._id.toString()
    ) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    product.comments[commentIndex].comment = comment;

    const updatedProduct = await product.save();

    res.json({
      message: "Comment updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

const deleteComments = async (req: Request, res: Response) => {
  try {
    const user = req.user;

    console.log(req.params.commentId, "Comment ID");
    console.log(req.params.id, "product ID");

    if (!user) {
      return res.status(400).json({ error: "Invalid comment data" });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const comment = product.comments.find(
      (comment) => comment._id.toString() === req.params.commentId
    );

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    if (comment.user.toString() !== user._id.toString()) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.params.commentId,
          },
        },
      },
      { new: true }
    );

    res.json({
      message: "Comment deleted successfully",
      product: updatedProduct,
    });
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
  updateComments,
  deleteComments,
};
