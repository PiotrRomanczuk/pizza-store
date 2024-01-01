"use client";

import { useTransition } from "react";

export default function AddToCart() {
  const [isPending, startTransition] = useTransition();

  const handleAddToCartButton = () => {
    startTransition(() => {});
  };
  return (
    <button
      aria-label="Add item to cart"
      title="Add Item to Cart"
      disabled={isPending}
      className="mt-4 w-full rounded-lg border px-8 py-2 transition duration-300 hover:bg-green-700 hover:text-white"
      onClick={() => handleAddToCartButton}
    >
      <span>Add To Cart</span>
    </button>
  );
}
