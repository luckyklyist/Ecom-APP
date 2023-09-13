import { Request, Response } from "express";
import Cart from "../models/cart.model";
import User from "../models/user.model";

interface MyRequest extends Request {
  user: string;
}

const calculateTotalPrice = (items: any[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const getCarts = async (req: Request, res: Response) => {
  try {
    const carts = await Cart.find({ user: (req as MyRequest).user });
    res.json(carts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Carts" });
  }
};

const createCart = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;
    const checkExistingCart = await Cart.findOne({ user: req.user });
    if (checkExistingCart) {
      return res.send({ message: "User already have a active cart" });
    }
    const newCart = new Cart({
      user: req.user,
      items: items,
      totalPrice: calculateTotalPrice(items),
    });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create cart" });
  }
};

const updateCart = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;
    const userId = req.user;
    const existingCart = await Cart.findOne({ user: userId });

    if (!existingCart) {
      return res.status(404).json({ error: "Cart not found for the user." });
    }

    existingCart.items.push(...items);
    existingCart.totalPrice = calculateTotalPrice(existingCart.items);
    await existingCart.save();
    res.status(200).json(existingCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update cart" });
  }
};

const deleteCart = async (req: Request, res: Response) => {
  try {
    const cartId = req.params.id;
    const deleteCart = await Cart.deleteOne({ _id: cartId });
    res.send({ message: "Cart deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart" });
  }
};

export { getCarts, createCart, updateCart, deleteCart };
