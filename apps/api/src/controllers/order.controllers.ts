import Product from "../models/product.model";
import Order from "../models/order.model";
import { Request, Response } from "express";

const getOrders = async (req: Request, res: Response) => {
  try {
    const orderData = await Order.find({ user: req.user });
    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: orderData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on fetching orders", error });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const { productsCart } = req.body; // Array of ID of the Products

    let price = 0;

    for (const productItem of productsCart) {
      const product = await Product.findOne({ _id: productItem.product });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      price += product.price;
    }

    console.log(price);

    const newOrder = await Order.create({
      user: req.user,
      productsCart,
      paymentStatus: true,
      orderStatus: true,
    });

    return res.status(201).json({
      message: "Order created successfully",
      data: newOrder,
      price: price,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on creating orders", error });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const updateOrderData = req.body;
    const orderId = req.params.id;

    const checkProduct = await Order.findOne({ _id: orderId });

    if (!checkProduct) {
      return res.status(404).json({ message: "No order found" });
    }

    const updateOrder = await Order.findOneAndUpdate(
      { _id: orderId },
      updateOrderData
    );
    return res
      .status(200)
      .json({ message: "Order updated successfully", data: updateOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on updating the order", error });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;
    await Order.deleteOne({ _id: orderId });
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on deleting the order", error });
  }
};

export { getOrders, createOrder, updateOrder, deleteOrder };
