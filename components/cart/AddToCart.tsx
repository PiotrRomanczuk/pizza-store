"use client";

import { useTransition, useContext } from "react";
import { CartContext } from "../../context/CartProvider";

export default function AddToCart() {
  const [isPending, startTransition] = useTransition();

  const { cartItems, addToCart } = useContext(CartContext);

  const handleAddToCartButton = () => {
    startTransition(() => {
      () => addToCart(product);
    });
  };
  return (
    <button
      aria-label="Add item to cart"
      title="Add Item to Cart"
      disabled={isPending}
      className="mt-4 w-full rounded-lg border px-8 py-2 transition duration-300 hover:bg-green-700 hover:text-white"
      onClick={() => handleAddToCartButton()}
    >
      <span>Add To Cart</span>
    </button>
  );
}
