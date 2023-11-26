import { StaticImageData } from "next/image";

export type Catagories = "tech" | "clothes" | "accessories" | "other";

export type Catagory = {
  name: string;
  image: StaticImageData;
  price: number;
};

export type Products = {
  clothes: Catagory[];
  tech: Catagory[];
  accessories: Catagory[];
  other: Catagory[];
};
