"use server";

import createCart, { getCart } from "@/lib/createCart";
import prisma from "@/lib/db";
import getErrorMessage from "@/lib/getErrorMessage";
import { revalidatePath } from "next/cache";

export default async function addToCart(productId: string) {
  try {
    const cart = (await getCart()) ?? (await createCart());

    const articleInCart = cart.items.find(
      (item) => item.productId === productId,
    );

    if (articleInCart) {
      await prisma.cartItem.update({
        where: { id: articleInCart.id },
        data: {
          quantity: { increment: 1 },
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity: 1,
        },
      });
    }
  } catch (error) {
    console.log(getErrorMessage(error));
  }

  revalidatePath("/product/[id]", "page");
}
