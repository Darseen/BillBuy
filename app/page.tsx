import FeaturedProduct from "@/components/FeaturedProduct";
import RecommendedProducts from "@/components/RecommendedProducts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-2 sm:px-10">
      <FeaturedProduct />
      <RecommendedProducts />
    </main>
  );
}
