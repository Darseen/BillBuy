import { Catagories, Product, Products } from "@/@types/types";

// Clothes
import shoes from "@/assets/images/products/clothes/shoes.jpg";
import shoes2 from "@/assets/images/products/clothes/shoes2.jpg";
import shoes3 from "@/assets/images/products/clothes/shoes3.jpg";
import shoes4 from "@/assets/images/products/clothes/shoes4.jpg";
import shoes5 from "@/assets/images/products/clothes/shoes5.jpg";
import shirt from "@/assets/images/products/clothes/shirt.jpg";
import shirt2 from "@/assets/images/products/clothes/shirt2.jpg";
import shirt3 from "@/assets/images/products/clothes/shirt3.jpg";
import jacket from "@/assets/images/products/clothes/jacket.jpg";
import jeans from "@/assets/images/products/clothes/jeans.jpg";
import socks from "@/assets/images/products/clothes/socks.jpg";

// Tech
import laptop from "@/assets/images/products/tech/laptop.jpg";
import airpods from "@/assets/images/products/tech/airpods.jpg";
import airpods2 from "@/assets/images/products/tech/airpods2.jpg";
import airpods3 from "@/assets/images/products/tech/airpods3.jpg";
import camera from "@/assets/images/products/tech/camera.jpg";
import controller from "@/assets/images/products/tech/controller.jpg";
import watch from "@/assets/images/products/tech/watch.jpg";
import watch2 from "@/assets/images/products/tech/watch2.jpg";
import watch3 from "@/assets/images/products/tech/watch3.jpg";
import watch4 from "@/assets/images/products/tech/watch4.jpg";
import headphones from "@/assets/images/products/tech/headphones.jpg";
import headphones2 from "@/assets/images/products/tech/headphones2.jpg";

// Accessories
import glasses from "@/assets/images/products/accessories/glasses.jpg";

// Other
import vase from "@/assets/images/products/other/vase.jpg";

// this function gets products by catagory
export default function getProducts(catagory: Catagories): Product[] | null {
  const products: Products = {
    clothes: [
      { name: "Shoes", imageUrl: shoes, price: 199 },
      { name: "Shoes", imageUrl: shoes2, price: 259 },
      { name: "Shoes", imageUrl: shoes3, price: 399 },
      { name: "Shoes", imageUrl: shoes4, price: 299 },
      { name: "Shoes", imageUrl: shoes5, price: 499 },
      { name: "Shirt", imageUrl: shirt, price: 99 },
      { name: "Shirt", imageUrl: shirt2, price: 149 },
      { name: "Shirt", imageUrl: shirt3, price: 129 },
      { name: "Jacket", imageUrl: jacket, price: 799 },
      { name: "Jeans", imageUrl: jeans, price: 599 },
      { name: "Socks", imageUrl: socks, price: 49 },
    ],
    tech: [
      { name: "Laptop", imageUrl: laptop, price: 1000 },
      { name: "Camera", imageUrl: camera, price: 1299 },
      { name: "Headphones", imageUrl: headphones, price: 199 },
      { name: "Airpods", imageUrl: airpods, price: 499 },
      { name: "Airpods", imageUrl: airpods3, price: 299 },
      { name: "Controller", imageUrl: controller, price: 249 },
      { name: "Airpods", imageUrl: airpods2, price: 399 },
      { name: "Headphones", imageUrl: headphones2, price: 159 },
    ],
    accessories: [
      { name: "Watch", imageUrl: watch, price: 549 },
      { name: "Watch", imageUrl: watch2, price: 899 },
      { name: "Watch", imageUrl: watch3, price: 639 },
      { name: "Watch", imageUrl: watch4, price: 999 },
      { name: "Glasses", imageUrl: glasses, price: 79 },
    ],
    other: [{ name: "Vase", imageUrl: vase, price: 100 }],
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
