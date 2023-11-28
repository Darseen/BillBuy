import FeaturedProduct from "@/components/FeaturedProduct";
import Products from "@/components/Products";
import SubNav from "@/components/SubNav";

export default function Home() {
  return (
    <div>
      <SubNav />
      <main className="flex flex-col items-center justify-center p-2 sm:px-10">
        <FeaturedProduct />
        <div className="divider divider-accent">Technology</div>
        <Products catagory="tech" />
        <div className="divider divider-accent">Clothes</div>
        <Products catagory="clothes" />
        <div className="divider divider-accent">Accessories</div>
        <Products catagory="accessories" />
        <div className="divider divider-accent">Other</div>
        <Products catagory="other" />
      </main>
    </div>
  );
}
