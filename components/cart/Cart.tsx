import { useContext } from "react";

import { CartItem } from "./CartItem";
import { ICartItem } from "../../interfaces/CartItem";

import { CartContext } from "../../context/CartProvider";

import { notifyCartCleared, notifyRemovedFromCart } from "./CartNotifications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartProps {
  showModal: boolean;
  toggle: () => void;
}

// Update the Cart component to use the interface
const Cart: React.FC<CartProps> = ({ showModal, toggle }) => {
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
      <div className="fixed inset-0 left-1/4 flex flex-col items-center gap-8 bg-white p-10 text-sm font-normal uppercase text-black dark:bg-black dark:text-white">
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
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => handleQuantityChange(item)}
              onAdd={() => addToCart(item)}
            />
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
};
