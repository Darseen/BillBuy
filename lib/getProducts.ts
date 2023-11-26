import { Catagories, Catagory, Products } from "@/@types/types";

// Clothes
import shoes from "@/public/images/products/clothes/shoes.jpg";
import shoes2 from "@/public/images/products/clothes/shoes2.jpg";
import shoes3 from "@/public/images/products/clothes/shoes3.jpg";
import shoes4 from "@/public/images/products/clothes/shoes4.jpg";
import shoes5 from "@/public/images/products/clothes/shoes5.jpg";
import shirt from "@/public/images/products/clothes/shirt.jpg";
import shirt2 from "@/public/images/products/clothes/shirt2.jpg";
import shirt3 from "@/public/images/products/clothes/shirt3.jpg";
import jacket from "@/public/images/products/clothes/jacket.jpg";
import jeans from "@/public/images/products/clothes/jeans.jpg";
import socks from "@/public/images/products/clothes/socks.jpg";

// Tech
import laptop from "@/public/images/products/tech/laptop.jpg";
import airpods from "@/public/images/products/tech/airpods.jpg";
import airpods2 from "@/public/images/products/tech/airpods2.jpg";
import airpods3 from "@/public/images/products/tech/airpods3.jpg";
import camera from "@/public/images/products/tech/camera.jpg";
import controller from "@/public/images/products/tech/controller.jpg";
import watch from "@/public/images/products/tech/watch.jpg";
import watch2 from "@/public/images/products/tech/watch2.jpg";
import watch3 from "@/public/images/products/tech/watch3.jpg";
import watch4 from "@/public/images/products/tech/watch4.jpg";
import headphones from "@/public/images/products/tech/headphones.jpg";
import headphones2 from "@/public/images/products/tech/headphones2.jpg";

// Accessories
import glasses from "@/public/images/products/accessories/glasses.jpg";

// Other
import vase from "@/public/images/products/other/vase.jpg";

// this function gets products by catagory
export default function getProducts(catagory: Catagories): Catagory[] | null {
  const products: Products = {
    clothes: [
      { name: "Shoes", image: shoes, price: 199 },
      { name: "Shoes", image: shoes2, price: 259 },
      { name: "Shoes", image: shoes3, price: 399 },
      { name: "Shoes", image: shoes4, price: 299 },
      { name: "Shoes", image: shoes5, price: 499 },
      { name: "Shirt", image: shirt, price: 99 },
      { name: "Shirt", image: shirt2, price: 149 },
      { name: "Shirt", image: shirt3, price: 129 },
      { name: "Jacket", image: jacket, price: 799 },
      { name: "Jeans", image: jeans, price: 599 },
      { name: "Socks", image: socks, price: 49 },
    ],
    tech: [
      { name: "Laptop", image: laptop, price: 1000 },
      { name: "Airpods", image: airpods, price: 499 },
      { name: "Airpods", image: airpods2, price: 399 },
      { name: "Airpods", image: airpods3, price: 299 },
      { name: "Camera", image: camera, price: 1299 },
      { name: "Controller", image: controller, price: 249 },
      { name: "Watch", image: watch, price: 549 },
      { name: "Watch", image: watch2, price: 899 },
      { name: "Watch", image: watch3, price: 639 },
      { name: "Watch", image: watch4, price: 999 },
      { name: "Headphones", image: headphones, price: 199 },
      { name: "Headphones", image: headphones2, price: 159 },
    ],
    accessories: [{ name: "Glasses", image: glasses, price: 79 }],
    other: [{ name: "Vase", image: vase, price: 100 }],
  };

  switch (catagory) {
    case "accessories":
      return products.accessories;
    case "tech":
      return products.tech;
    case "clothes":
      return products.clothes;
    case "other":
      return products.other;

    default:
      return null;
  }
}
