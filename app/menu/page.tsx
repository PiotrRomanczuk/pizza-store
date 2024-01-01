import Link from "next/link";
import { Products, IProduct } from "./Products";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mt-10 text-5xl">Our menu:</h2>
      <ul>
        {Products.map((product: IProduct, idx) => (
          <li key={idx} className="text-2xl">
            <Link href={`/menu/${encodeURIComponent(product.nameLowerCase)}`}>
              {product.name.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
