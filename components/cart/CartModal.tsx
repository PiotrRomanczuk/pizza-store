"use client";

import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CartContext } from "@/context/CartProvider";

interface CartProps {
  showModal: boolean;
  toggle: () => void;
}

export default function CartModal({ showModal, toggle }: CartProps) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Calculate totals
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0,
  );
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 0),
    0,
  );

  return (
    <Dialog open={showModal} onClose={toggle} className="relative z-[100]">
      <DialogBackdrop
        transition
        className="data-closed:opacity-0 fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="data-closed:translate-x-full pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={toggle}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                      <p className="text-center text-gray-500">
                        Your cart is empty
                      </p>
                    ) : (
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cartItems.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-center justify-between gap-2 py-6"
                            >
                              <div>
                                <h3 className="text-base font-medium text-gray-900">
                                  {item.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  ${item.price}
                                </p>
                              </div>

                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() => removeFromCart(item)}
                                  className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                                >
                                  -
                                </button>
                                <p className="min-w-[20px] text-center text-gray-600">
                                  {item.quantity || 0}
                                </p>
                                <button
                                  onClick={() => addToCart(item)}
                                  className="rounded bg-gray-800 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                                >
                                  +
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total Items:</p>
                      <p>{totalQuantity}</p>
                    </div>
                    <div className="mt-2 flex justify-between text-base font-medium text-gray-900">
                      <p>Total Price:</p>
                      <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="/cartOrder"
                        className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
                      >
                        Proceed to Checkout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
