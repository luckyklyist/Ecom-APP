import { userSignupSchema, User } from "../validations_schema/auth.schema";
import { Request, Response, NextFunction } from "express";

interface UserData extends Request {
  validatedUserData?: User;
}

export function validateUserSingUpSchema(
  req: UserData,
  res: Response,
  next: NextFunction
) {
  const userData = req.body;
  const validationResult = userSignupSchema.safeParse(userData);

  if (validationResult.success) {
    req.validatedUserData = validationResult.data;
    next();
  } else {
    res.status(400).json({ error: validationResult.error });
  }
}
