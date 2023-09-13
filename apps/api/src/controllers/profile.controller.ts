import User from "../models/user.model";
import { Request, Response } from "express";

const getProfile = async (req: Request, res: Response) => {
  try {
    const userProfile = await User.findOne({ _id: req.user });
    return res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the profile" });
  }
};

export { getProfile };
