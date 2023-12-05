"use server";

import { redirect } from "next/navigation";

export default async function searchProducts(formData: FormData) {
  const query = formData.get("query")?.toString();

  if (query) {
    redirect(`/search?query=${query}`);
  }
}
