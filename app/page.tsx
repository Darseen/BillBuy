import FeaturedProduct from "@/components/FeaturedProduct";
import Products from "@/components/Products";
import SubNav from "@/components/SubNav";
import getProducts from "@/lib/getProducts";

export default async function Home() {
  const tech = await getProducts("Technology");
  const clothes = await getProducts("Clothes");
  const accessories = await getProducts("Accessories");
  const other = await getProducts("Other");
  return (
    <div>
      <SubNav />
      <main className="flex flex-col items-center justify-center p-2 sm:px-10">
        <FeaturedProduct />
        <div className="divider divider-accent">Technology</div>
        {tech && <Products catagory="Technology" products={tech} />}
        <div className="divider divider-accent">Clothes</div>
        {clothes && <Products catagory="Clothes" products={clothes} />}
        <div className="divider divider-accent">Accessories</div>
        {accessories && (
          <Products catagory="Accessories" products={accessories} />
        )}
        <div className="divider divider-accent">Other</div>
        {other && <Products catagory="Other" products={other} />}
      </main>
    </div>
  );
}
