import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
} from "../controllers/auth.controllers";
import validateToken from "../middlewares/validateToken";
import { getProfile } from "../controllers/profile.controller";
import { validateUserSingUpSchema } from "../middlewares/validateUserData";
const routes = express.Router();

routes.get("/userlist", validateToken, getUsers);
routes.get("/profile", validateToken, getProfile);
routes.post("/signup", validateUserSingUpSchema, createUser);
routes.post("/login", loginUser);

export default routes;
