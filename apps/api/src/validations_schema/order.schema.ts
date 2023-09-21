import { z } from "zod";

export const createOrderSchema = z.object({
  productsCart: z.array(
    z.object({
      product: z.string(),
    })
  ),
});

export type Order = z.infer<typeof createOrderSchema>;
