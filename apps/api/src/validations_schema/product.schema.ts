import { z } from "zod";

export const productSchema = z.object({
  productName: z.string().min(5).max(20),
  price: z.number(),
  productDescription: z.string(),
  imageUrl: z.string(),
});

export const updateProductSchema = z.object({
  productName: z.string().min(5).max(20).optional(),
  price: z.number().optional(),
  productDescription: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type UpdateProduct = z.infer<typeof updateProductSchema>;

export type Product = z.infer<typeof productSchema>;
