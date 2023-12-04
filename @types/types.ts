import { Cart, Prisma, Product } from "@prisma/client";

export type Catagories = "Technology" | "Clothes" | "Accessories" | "Other";

export type Products = {
  clothes: Product[];
  tech: Product[];
  accessories: Product[];
  other: Product[];
};

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subTotal: number;
};
