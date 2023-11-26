import { Catagory } from "@/@types/types";
import Image from "next/image";
import React from "react";

export default function Product({ product }: { product: Catagory }) {
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl w-56 h-96 sm:w-auto sm:h-auto sm:max-w-sm rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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
