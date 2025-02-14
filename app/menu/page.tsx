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
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
          <p className="mt-2 text-gray-600">Discover our delicious selection of items</p>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </div>
  );
}
