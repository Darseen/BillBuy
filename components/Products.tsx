"use client";

import { Catagories } from "@/@types/types";
import Product from "./Product";
import getProducts from "@/lib/getProducts";
import { useCatagoryInView } from "@/hooks/useCatagoryInView";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Products({ catagory }: { catagory: Catagories }) {
  const { ref } = useCatagoryInView(catagory);

  return (
    <section
      ref={ref}
      id={catagory}
      className="relative mb-4 flex w-full  flex-col sm:mb-8"
    >
      <Link
        href={`/products/${catagory}`}
        className="text-md flex items-center gap-2 self-end text-blue-500 underline hover:scale-105"
      >
        View All
        <FaArrowRightLong className="mb-[2px] self-end" />
      </Link>
      <div className="flex w-full gap-4 overflow-x-auto p-4">
        {getProducts(catagory)?.map((product, i) => (
          <div key={i} className="flex flex-nowrap">
            <Product product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
