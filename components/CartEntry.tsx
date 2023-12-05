"use client";

import { CartItemWithProduct } from "@/@types/types";
import changeQuantity from "@/actions/changeQuantity";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

export default function CartEntry({ cartItem }: CartEntryProps) {
  const [isPrending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];

  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Image
          src={cartItem.product.imageUrl}
          alt={cartItem.product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={`/products/${cartItem.product.id}`} className="font-bold">
            {cartItem.product.name}
          </Link>
          <div>Price: {`$${cartItem.product.price}`}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select select-bordered w-full max-w-[80px]"
              defaultValue={cartItem.quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await changeQuantity(cartItem.product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-2">
            Total: {`$${cartItem.product.price * cartItem.quantity}`}
            {isPrending && <span className="loading loading-spinner"></span>}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
