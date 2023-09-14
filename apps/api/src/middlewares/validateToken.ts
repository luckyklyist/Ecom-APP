import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/developement.cofig";

interface MyRequest extends Request {
  user: JwtPayload;
}

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers?.authorization;

    // split from bearer token from the header

    const bearerToken = token?.split(" ")[1];
    
    if (!bearerToken) {
      return res.status(401).send({ message: "Missing Token" });
    }

    try {
      const verifyToken = jwt.verify(bearerToken, config.SECRET_KEY) as JwtPayload;
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
