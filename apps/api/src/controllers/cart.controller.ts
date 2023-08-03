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

    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create cart' });
    }
}

export {
    getCarts
}