"use client";

import { useState, useEffect, useContext } from "react";

import Cart from "@/components/cart/Cart";
import { DummyProducts } from "./Products";
import { ICartItem } from "@/interfaces/CartItem";
import { CartContext } from "@/context/CartProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyRemovedFromCart,
  notifyAddedToCart,
} from "@/components/cart/CartNotifications";
import { ProductCard } from "./ProductCard";

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState<ICartItem[]>([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  async function getProducts() {
    const productsWithQuantity: ICartItem[] = DummyProducts.map((product) => ({
      ...product,
      quantity: 1,
    }));

    setProducts(productsWithQuantity);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleRemoveFromCart = (item: ICartItem) => {
    removeFromCart(item);
    notifyRemovedFromCart(item);
  };

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <ToastContainer />
      <div className="flex items-center justify-between px-20 py-5">
        {!showModal && (
          <button
            className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={toggle}
          >
            Cart ({cartItems.length})
          </button>
        )}
      </div>
      <div className="grid gap-4 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItems={cartItems}
          />
        ))}
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
}
