import express from 'express';
import { getUsers,createUser,loginUser } from '../controllers/auth.controllers';
import validateToken from '../middlewares/validateToken';
const routes = express.Router();

routes.get('/userlist',validateToken(),getUsers);
routes.post('/signup',createUser);
routes.post('/login',loginUser);

export default routes;