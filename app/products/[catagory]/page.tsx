import { Catagories, Catagory } from "@/@types/types";
import { LINKS } from "@/lib/data";
import getProducts from "@/lib/getProducts";
import Image from "next/image";

interface PageProps {
  params: {
    catagory: Catagories;
  };
}

type LinkType = (typeof LINKS)[number]["name"];

export default function page({ params: { catagory } }: PageProps) {
  const dividerName = (catagory: Catagories): LinkType | null => {
    switch (catagory) {
      case "tech":
        return "Technology";
      case "clothes":
        return "Clothes";
      case "accessories":
        return "Accessories";
      case "other":
        return "Other";

      default:
        return null;
    }
  };

  return (
    <section className="mb-6 flex flex-col items-center justify-center">
      <div className="divider divider-accent">{dividerName(catagory)}</div>
      <section className="flex w-full flex-wrap items-center justify-center gap-4">
        {getProducts(catagory)?.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </section>
    </section>
  );
}

const Product = ({ product }: { product: Catagory }) => {
  return (
    <div className="card card-compact h-[30rem] rounded-lg bg-base-100 shadow-xl transition-all hover:scale-105 sm:max-w-sm">
      <figure className="rounded-lg">
        <Image src={product.image} alt={product.name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <div className="badge badge-accent p-3">{"$" + product.price}</div>
        <p>Add this product to your cart</p>
        <div className="card-actions">
          <button className="btn btn-primary mt-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
