"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context/CartProvider";

const CartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <button
      className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
      onClick={onClick}
    >
      Cart ({cartItems.length})
    </button>
  );
};

export default CartButton;
