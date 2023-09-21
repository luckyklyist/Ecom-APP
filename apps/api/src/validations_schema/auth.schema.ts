import { z } from "zod";

export const userSignupSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters long" })
    .max(10, { message: "Username cannot exceed 10 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  role: z.enum(["Admin", "User"]),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password cannot exceed 20 characters" }),
  isVerified: z.boolean().default(false).optional(),
});

export const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string(),
});

export type UserSignUp = z.infer<typeof userSignupSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
