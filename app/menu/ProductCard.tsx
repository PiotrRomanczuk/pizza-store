import Image from "next/image";

import { IProduct } from "./Products";
import Link from "next/link";
import AddToCart from "@/components/cart/AddToCart";
import { notifyAddedToCart } from "@/components/cart/CartNotifications";
import { ICartItem } from "@/interfaces/CartItem";

interface ProductCardProps {
  product: ICartItem;
  addToCart: (product: ICartItem) => void;
  removeFromCart: (product: ICartItem) => void;
  cartItems: ICartItem[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  removeFromCart,
  cartItems,
}) => {
  function handleRemoveFromCart(product: ICartItem) {
    // TODO: implement
  }

  return (
    <div key={product.id} className="rounded-lg bg-white px-10 py-10 shadow-md">
      {/* <img
        src={product.img}
        alt={product.title}
        className="h-48 rounded-md"
      /> */}

      <div className="mt-4">
        <h1 className="text-lg font-bold uppercase">{product.name}</h1>

        <p className="mt-2 text-sm text-gray-600">
          {product.description.slice(0, 40)}...
        </p>

        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {!cartItems.find((item: ICartItem) => item.id === product.id) ? (
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
              {
                cartItems.find((item: ICartItem) => item.id === product.id)
                  ?.quantity
              }
            </p>

            <button
              className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => {
                const cartItem = cartItems.find(
                  (item: ICartItem) => item.id === product.id,
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
