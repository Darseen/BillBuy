import { Catagory } from "@/@types/types";
import Image from "next/image";

export default function Product({ product }: { product: Catagory }) {
  return (
    <div className="card h-96 w-56 rounded-lg bg-base-100 shadow-xl transition-all duration-300 ease-in-out sm:card-side hover:scale-105 sm:h-auto sm:w-auto sm:max-w-sm">
      <figure className="!rounded-b-2xl sm:!rounded-2xl">
        <Image src={product.image} alt={product.name} className="h-64 w-72" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{product.name}</h2>
          <div className="badge badge-accent p-3">{"$" + product.price}</div>
        </div>
        <p>Add this product to your cart now</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
