import express from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/products', productRoutes);
routes.use('/cart', cartRoutes);

export default routes;