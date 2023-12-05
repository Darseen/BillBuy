import CartEntry from "@/components/CartEntry";
import { getCart } from "@/lib/createCart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart - BillBuy",
};

export default async function page() {
  const cart = await getCart();
  return (
    <div className="mt-5 flex min-h-screen flex-col items-center justify-start">
      <h1 className="mb-6 text-xl font-bold">Shopping Cart</h1>
      <div className="mx-2 mt-10 flex flex-col items-center justify-center self-center sm:mx-10 sm:self-start">
        {cart?.items.map((item) => <CartEntry cartItem={item} key={item.id} />)}
      </div>
      {!cart?.items.length && <p>Your Cart is Empty</p>}
      <div className="flex flex-col items-center justify-center">
        <p className="mb-3 font-bold">Total: {`$${cart?.subTotal || 0}`}</p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}
