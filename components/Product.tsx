import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: Product }) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="card h-96 w-56 rounded-lg bg-base-100 shadow-xl transition-all duration-300 ease-in-out sm:card-side hover:scale-105 sm:h-auto sm:w-auto sm:max-w-sm">
        <figure className="!rounded-b-2xl sm:!rounded-2xl">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={288}
            height={256}
            className="h-64 w-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{product.name}</h2>
            <div className="badge badge-accent p-3">{"$" + product.price}</div>
          </div>
          {isNew && <div className="badge badge-secondary">NEW</div>}
          <p>{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
