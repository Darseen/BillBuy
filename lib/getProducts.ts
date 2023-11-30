import { Catagories } from "@/@types/types";
import prisma from "./db";
import { Product } from "@prisma/client";

export default async function getProducts(
  catagory: Catagories,
): Promise<Product[] | null> {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (products) {
    return products.filter((product) => product.catagory === catagory);
  }
  return null;
}
