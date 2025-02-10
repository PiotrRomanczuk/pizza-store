import Image from "next/image";

import { IProduct } from "@/interfaces/IProduct";
import { notifyAddedToCart } from "@/components/cart/CartNotifications";

interface ProductCardProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  cartItems: IProduct[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  removeFromCart,
  cartItems,
}) => {
  function handleRemoveFromCart(product: IProduct) {
    // TODO: implement
  }

  return (
    <div key={product.id} className="rounded-lg bg-white px-10 py-10 shadow-md">
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
      <div className="mt-6 flex items-center justify-between">
        {!cartItems.some((item) => item.id === product.id) ? (
          <button
            className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={() => {
              addToCart(product);
              notifyAddedToCart(product);
            }}
          >
            Add to cart
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => {
                addToCart(product);
              }}
            >
              +
            </button>

            <p className="text-gray-600">
              {cartItems.find((item) => item.id === product.id)?.count || 0}
            </p>

            <button
              className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => {
                const cartItem = cartItems.find(
                  (item) => item.id === product.id,
                );

                if (cartItem?.quantity === 1) {
                  handleRemoveFromCart(product);
                } else {
                  removeFromCart(product);
                }
              }}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};
