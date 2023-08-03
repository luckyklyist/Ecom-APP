import { Request, Response } from "express";
import Cart from "../models/cart.model";
import User from "../models/user.model";

interface MyRequest extends Request {
    user: string
}

const getCarts = async (req: Request, res: Response) => {
    try {
        const carts = await Cart.find({ user: (req as MyRequest).user })
        res.json(carts);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch Carts' });
    }
}

const createCart = async (req: Request, res: Response) => {
    try {
        const cartData = req.body;
        const newCart = new Cart({
            user: req.user,
            items: cartData.items,
            totalPrice: 0
        })
        await newCart.save();
        res.status(201).json(newCart)
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create cart' });
    }
}

const updateCart = async (req: Request, res: Response) => {
    try {
        const cartId = req.params.id;
        const updatedCart = await Cart.updateOne({ _id: cartId }, req.body);
        res.send({ message: "Cart updated", updateCart });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
}

const deleteCart = async (req: Request, res: Response) => {
    try {
        const cartId = req.params.id;
        const deleteCart = await Cart.deleteOne({ _id: cartId });
        res.send({ message: "Cart deleted" })
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
}

export {
    getCarts,
    createCart
}