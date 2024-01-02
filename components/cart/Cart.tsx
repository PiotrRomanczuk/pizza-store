import Image from "next/image";

import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { ICartItem } from "../../interfaces/CartItem";
import { notifyCartCleared, notifyRemovedFromCart } from "./CartNotifications";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from "prop-types";

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};

export default function Cart({
  showModal,
  toggle,
}: {
  showModal: boolean;
  toggle: () => void;
}) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const handleRemoveFromCart = (item: ICartItem) => {
    removeFromCart(item);
    notifyRemovedFromCart(item);
  };

  const handleQuantityChange = (item: ICartItem) => {
    const cartItem = cartItems.find((product) => product.id === item.id);

    if (cartItem?.quantity === 1) {
      handleRemoveFromCart(item);
    } else {
      removeFromCart(item);
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 left-1/4 flex flex-col items-center gap-8 bg-white p-10  text-sm  font-normal uppercase text-black dark:bg-black dark:text-white">
        <ToastContainer />
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex items-center justify-between" key={item.id}>
              <div className="flex gap-4">
                {/* <Image
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-24 w-24 rounded-md"
                /> */}
                <div className="flex justify-center gap-8">
                  <h1 className="text-lg font-bold">{item.id}</h1>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                  onClick={() => handleQuantityChange(item)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <button
              className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
}
