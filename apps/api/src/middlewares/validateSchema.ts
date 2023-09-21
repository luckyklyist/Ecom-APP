import { Request, Response, NextFunction } from "express";
import { z, ZodSchema } from "zod";

export function validatePayload(schema: ZodSchema<any>) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      let parsed_data = schema.parse(req.body);
      req.body = parsed_data;
      next();
    } catch (e) {
      return res.status(400).json(e);
    }
  };
}
