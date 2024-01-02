"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { ICartItem } from "@/interfaces/CartItem";
import {
  addToCartAction,
  clearCartAction,
  getCartTotalAction,
  removeFromCartAction,
} from "./CartActions";

export interface CartContextProps {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")!)
      : [],
  );

  const addToCart = (item: ICartItem) =>
    addToCartAction(item, cartItems, setCartItems);

  const removeFromCart = (item: ICartItem) =>
    removeFromCartAction(item, cartItems, setCartItems);

  const clearCart = () => clearCartAction(setCartItems);

  const getCartTotal = () => getCartTotalAction(cartItems);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString) {
      setCartItems(JSON.parse(cartItemsString)!);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
