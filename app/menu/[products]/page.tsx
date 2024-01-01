"use client";

import { Products } from "../Products";

import { useParams } from "next/navigation";

export default function Home() {
  const productName = useParams();

  console.log(productName);

  const product = Products.find(
    (p) => p.nameLowerCase === productName.products,
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
