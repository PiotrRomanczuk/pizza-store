import Link from "next/link";
import { Products, IProduct } from "./Products";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <section className="mx-auto h-full w-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="py-8 text-4xl text-black">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
