"use client";

import { useEffect, useState, useContext } from "react";
import { DummyProducts } from "./DummyProducts";
import { IProduct } from "@/interfaces/IProduct";
import { ProductCard } from "./ProductCard";
import { CartContext } from "@/context/CartProvider";
import { Pagination } from "./Pagination";



export default function Page() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // console.log(cartItems);

  async function getProducts() {
    setProducts(DummyProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
