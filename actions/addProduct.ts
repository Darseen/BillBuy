"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/db";
import getErrorMessage from "@/lib/getErrorMessage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function addProduct(formData: FormData) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);
    const catagory = formData.get("catagory")?.toString();

    if (!name || !description || !imageUrl || !price || !catagory) {
      throw new Error("Missing Product's details");
    }

    await prisma.product.create({
      data: {
        name,
        imageUrl,
        description,
        price,
        catagory,
        seller: "Darseen",
      },
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { success: "Product Added Successfully!" };
}
