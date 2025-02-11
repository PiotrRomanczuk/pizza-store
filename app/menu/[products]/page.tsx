"use client";

import { DummyProducts } from "../DummyProducts";
import { useParams } from "next/navigation";

export default function Home() {
  const productName = useParams();

  console.log(productName);

  const product = DummyProducts.find(
    (p) => p.nameLowerCase === productName.products,
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center text-2xl">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
