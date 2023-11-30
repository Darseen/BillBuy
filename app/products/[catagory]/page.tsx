import { Catagories } from "@/@types/types";
import getProducts from "@/lib/getProducts";
import { Product } from "@prisma/client";
import Image from "next/image";

interface PageProps {
  params: {
    catagory: Catagories;
  };
}

export default async function page({ params: { catagory } }: PageProps) {
  const products = await getProducts(catagory);

  return (
    <section className="mb-6 flex flex-col items-center justify-center">
      <div className="divider divider-accent">{catagory}</div>
      <section className="flex w-full flex-wrap items-center justify-center gap-4">
        {products?.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </section>
    </section>
  );
}

const Product = ({ product }: { product: Product }) => {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <div className="card card-compact h-[30rem] rounded-lg bg-base-100 shadow-xl transition-all hover:scale-105 sm:max-w-sm">
      <figure className="rounded-lg">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-64 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {product.name}{" "}
          {isNew && (
            <span className="badge badge-secondary font-normal">NEW</span>
          )}
        </h2>

        <div className="badge badge-accent p-3">{"$" + product.price}</div>
        <p>Add this product to your cart</p>
        <div className="card-actions">
          <button className="btn btn-primary mt-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
