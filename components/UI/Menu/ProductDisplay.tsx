import Image from "next/image";
import { IProductDisplay } from "@/interfaces/IProductDisplay";

export const ProductDisplay: React.FC<IProductDisplay> = ({ product }) => {
  return (
    <div>
      <Image
        src={product.imgSrc}
        alt={product.name}
        width={192}
        height={192}
        className="h-48 rounded-md object-cover"
      />

      <div className="mt-4">
        <h1 className="text-lg font-bold uppercase">{product.name}</h1>
        <p className="mt-2 text-sm text-gray-600">
          {product.description.slice(0, 40)}...
        </p>
        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>
    </div>
  );
}; 