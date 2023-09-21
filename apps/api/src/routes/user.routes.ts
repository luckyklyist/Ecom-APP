import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
} from "../controllers/auth.controllers";
import validateToken from "../middlewares/validateToken";
import { getProfile } from "../controllers/profile.controller";
import {
  userSignupSchema,
  userLoginSchema,
} from "../validations_schema/auth.schema";
import { validatePayload } from "../middlewares/validateSchema";
const routes = express.Router();

routes.get("/userlist", validateToken, getUsers);
routes.get("/profile", validateToken, getProfile);
routes.post("/signup", validatePayload(userSignupSchema), createUser);
routes.post("/login", validatePayload(userLoginSchema), loginUser);

export default routes;
