import addProduct from "@/actions/addProduct";
import AddProductBtn from "@/components/AddProductBtn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-8">
      <h1 className="mb-3 text-lg font-bold">{`Product's Details`}</h1>
      <form
        className="flex w-full max-w-3xl flex-col items-center"
        action={addProduct}
      >
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <select
          name="catagory"
          className="select select-bordered mb-4 w-full max-w-xs self-start"
          required
          defaultValue={"Defalut"}
        >
          <option value={"Defalut"} disabled>
            Catagory
          </option>
          <option>Technology</option>
          <option>Clothes</option>
          <option>Accessories</option>
          <option>Other</option>
        </select>
        <AddProductBtn />
      </form>
    </div>
  );
}
