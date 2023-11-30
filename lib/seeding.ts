import { Catagories } from "@/@types/types";
import getErrorMessage from "./getErrorMessage";
import { Product } from "@/@types/types";

const seeding = async (query: string, catagory: Catagories) => {
  const baseUrl = "https://api.unsplash.com/search/photos";
  const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
  console.log(
    `${baseUrl}?query=${query}&client_id=${ACCESS_KEY}&orientation=landscape`,
  );

  try {
    const res = await fetch(
      `${baseUrl}?query=${query}&client_id=${ACCESS_KEY}&orientation=landscape`,
    );

    const data = await res.json();

    const dbData: Product[] = [];
    data.results.forEach((image: any) => {
      const product: Product = {
        name: capitalizeFirstLetter(query),
        catagory,
        description: image.description,
        imageUrl: image.urls.regular,
        price: Math.floor(Math.random() * 1000) + 400,
        seller: "Darseen",
      };

      dbData.push(product);
    });
    console.log(dbData);
  } catch (error) {
    console.log(getErrorMessage(error));
  }
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default seeding;
