"use client";

import { useEffect } from "react";
import { Catagories } from "@/@types/types";
import Product from "./Product";
import getProducts from "@/lib/getProducts";
import { useCatagoryInView } from "@/hooks/useCatagoryInView";
import { useActiveCatagoryContext } from "@/context/activeCatagoryContext";

export default function Products({ catagory }: { catagory: Catagories }) {
  const { ref } = useCatagoryInView(catagory);

  return (
    <section
      ref={ref}
      id={catagory}
      className="flex overflow-x-auto p-4 w-full gap-4 mb-4 sm:mb-8"
    >
      {getProducts(catagory)?.map((product, i) => (
        <div key={i} className="flex flex-nowrap">
          <Product product={product} />
        </div>
      ))}
    </section>
  );
}
