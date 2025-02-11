"use client";

import { useTransition, useContext } from "react";
import { CartContext } from "@/context/CartProvider";
import { IProduct } from "@/interfaces/IProduct";
import { ICartItem } from "@/interfaces/ICartItem";

interface AddToCartProps {
  product: ICartItem;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [isPending, startTransition] = useTransition();

  const { cartItems, addToCart } = useContext(CartContext);

  const handleAddToCartButton = () => {
    startTransition(() => {
      console.log(product);
      console.log(cartItems);
      addToCart(product);
      console.log(cartItems);
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
