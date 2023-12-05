import Image from "next/image";
import logo from "@/assets/images/billBuyLogo.png";
import Link from "next/link";
import searchProducts from "@/actions/searchProducts";
import { getCart } from "@/lib/createCart";
import CartBtn from "./CartBtn";

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar m-auto flex-col gap-2 border-b border-gray-300 bg-base-100 shadow-md dark:border-gray-600 dark:bg-neutral sm:flex-row sm:px-7">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl normal-case hover:scale-105 hover:bg-transparent active:scale-95"
          >
            <Image src={logo} height={40} width={40} alt="BillBuy logo" />
            <span className="gradient-bg !ml-0">BillBuy</span>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="query"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
          <CartBtn cart={cart} />
        </div>
      </div>
    </div>
  );
}
