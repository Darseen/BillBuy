import { StaticImageData } from "next/image";

export type Catagories = "Technology" | "Clothes" | "Accessories" | "Other";

export type Product = {
  name: string;
  description?: string;
  imageUrl: StaticImageData | string;
  price: number;
  catagory?: Catagories;
  seller?: string;
};

export type Products = {
  clothes: Product[];
  tech: Product[];
  accessories: Product[];
  other: Product[];
};
