"use client";

import addToCart from "@/actions/addToCart";
import { useState, useTransition } from "react";
import { LuShoppingCart } from "react-icons/lu";

interface AddToCartBtnProps {
  productId: string;
}

export default function AddToCartBtn({ productId }: AddToCartBtnProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-primary hover:scale-105 active:scale-95"
        disabled={isPending}
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await addToCart(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
        <LuShoppingCart size={20} />
      </button>

      {isPending && (
        <span className="loading loading-spinner loading-md"></span>
      )}
      {!isPending && success && (
        <span className="text-success">Added to Cart.</span>
      )}
    </div>
  );
}
