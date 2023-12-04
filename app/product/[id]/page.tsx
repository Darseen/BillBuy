import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string): Promise<Product | null> => {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  } catch (error) {
    return null;
  }
});

export async function generateMetadata({
  params: { id },
}: PageProps): Promise<Metadata> {
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Could not find product",
    };
  }
  return {
    title: product.name + " - BillBuy",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function page({ params: { id } }: PageProps) {
  const product = await getProduct(id);

  if (!product) notFound();
  return (
    <div className="my-10 flex items-center justify-center px-2">
      <div className="card glass w-96 shadow-lg">
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover"
            priority
          />
        </figure>
        <div className="card-body items-center justify-center">
          <h2 className="card-title">
            {product.name}{" "}
            <div className="badge badge-accent p-3">{"$" + product.price}</div>
          </h2>

          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
