import Product from "./Product";
import getProducts from "@/lib/getProducts";

export default function RecommendedProducts() {
  return (
    <section className="flex overflow-x-auto p-4 w-full gap-4">
      {getProducts("tech")?.map((product, i) => (
        <div key={i} className="flex flex-nowrap">
          <Product product={product} />
        </div>
      ))}
    </section>
  );
}
