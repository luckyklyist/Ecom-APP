import { createCart, getCarts } from '../controllers/cart.controller';
import express, { Request, Response } from 'express'
import validateToken from '../middlewares/validateToken';

const router = express.Router();

router.get('/',validateToken, getCarts);
router.post('/',validateToken, createCart);


export default router;