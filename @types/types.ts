import { Product } from "@prisma/client";

export type Catagories = "Technology" | "Clothes" | "Accessories" | "Other";

export type Products = {
  clothes: Product[];
  tech: Product[];
  accessories: Product[];
  other: Product[];
};
