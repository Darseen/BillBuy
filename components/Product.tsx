import getProducts from "@/lib/getProducts";
import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <section>
      {getProducts("tech")?.map((product, i) => (
        <div key={i} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={product.image} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {"$" + product.price + ".99"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
