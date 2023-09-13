import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    return res.send({ users });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, role, password } = req.body;

    const checkUserExist = await User.findOne({ username, email });
    if (checkUserExist) {
      return res.send({ message: "Username/Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      role,
      password: hashedPassword,
    });

    return res
      .status(201)
      .send({ message: "New user created", userInfo: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const checkUserExist = await User.findOne({ email });

    if (!checkUserExist) {
      return res.send({ message: "User does not exists" });
    }

    const checkPassowrd = await bcrypt.compare(
      password,
      checkUserExist.password
    );

    if (!checkPassowrd) {
      res.send({ message: "Password not correct" });
    } else {
      const token = jwt.sign(
        { _id: checkUserExist._id },
        process.env.SECRETE_KEY || "random"
      );

      return res.status(200).send({ token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export { getUsers, createUser, loginUser };
