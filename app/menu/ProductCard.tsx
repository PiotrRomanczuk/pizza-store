import Image from "next/image";

import { IProduct } from "./Products";
import Link from "next/link";
import AddToCart from "@/components/cart/AddToCart";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Link key={product.id} href={`/menu/${product.nameLowerCase}`} passHref>
      <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.imgSrc}
          alt={product.imgAlt}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      <AddToCart />
    </Link>
  );
}
