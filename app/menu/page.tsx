"use client";

import { useEffect, useState, useContext } from "react";
import { DummyProducts } from "./DummyProducts";
import { IProduct } from "@/interfaces/IProduct";
import { ProductCard } from "./ProductCard";
import { CartContext } from "@/context/CartProvider";



export default function Page() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // console.log(cartItems);

  async function getProducts() {
    setProducts(DummyProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-gray-100">

      <div className="grid gap-4 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItems={cartItems}
            addToCart={() => addToCart(product)}
            removeFromCart={() => removeFromCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
