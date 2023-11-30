"use client";

import { useFormStatus } from "react-dom";

export default function AddProductBtn() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-primary w-full">
      {pending ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        "Add Product"
      )}
    </button>
  );
}
