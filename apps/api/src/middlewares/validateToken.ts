import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/developement.cofig";

interface MyRequest extends Request {
  user: JwtPayload;
}

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers?.authorization;

    if (!token) {
      return res.status(401).send({ message: "Missing Token" });
    }

    try {
      const verifyToken = jwt.verify(token, config.SECRET_KEY) as JwtPayload;
      if (verifyToken) {
        (req as MyRequest).user = verifyToken;
      }
      next();
    } catch (err) {
      return res.status(401).send({ message: "Invalid Token" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export default validateToken;
