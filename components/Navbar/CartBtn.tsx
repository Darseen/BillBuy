"use client";

import { ShoppingCart } from "@/@types/types";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

interface CartBtnProps {
  cart: ShoppingCart | null;
}

export default function CartBtn({ cart }: CartBtnProps) {
  const handleClose = () => {
    const el = document.activeElement as HTMLElement;

    if (el) {
      el.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        <div className="indicator">
          <LuShoppingCart size={22} />
          <span className="badge indicator-item badge-sm">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold">{cart?.size || 0} Items</span>
          <span className="text-info">
            Subtotal: {`$${cart?.subTotal || 0}`}
          </span>
          <div className="card-actions">
            <Link
              onClick={handleClose}
              href="/cart"
              className="btn btn-primary btn-block"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
