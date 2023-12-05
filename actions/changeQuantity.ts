"use server";

import createCart, { getCart } from "@/lib/createCart";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function changeQuantity(
  productId: string,
  quantity: number,
) {
  const cart = (await getCart()) ?? (await createCart());
  const articleInCart = cart.items.find((item) => item.productId === productId);

  // delete if item's quantity equals to 0
  if (quantity === 0) {
    if (articleInCart) {
      await prisma.cartItem.delete({
        where: { id: articleInCart.id },
      });
    }
  }
  // update quantity
  else {
    if (articleInCart) {
      await prisma.cartItem.update({
        where: { id: articleInCart.id },
        data: { quantity },
      });
    }
    // if there is no item, create one
    else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }
  }

  revalidatePath("/cart", "page");
}
