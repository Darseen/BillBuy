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
      className="relative flex flex-col w-full  mb-4 sm:mb-8"
    >
      <Link
        href={`/${catagory}`}
        className="flex items-center gap-2 underline text-md text-blue-500 self-end hover:scale-105"
      >
        View All
        <FaArrowRightLong className="self-end mb-[2px]" />
      </Link>
      <div className="flex gap-4 p-4 overflow-x-auto w-full">
        {getProducts(catagory)?.map((product, i) => (
          <div key={i} className="flex flex-nowrap">
            <Product product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
