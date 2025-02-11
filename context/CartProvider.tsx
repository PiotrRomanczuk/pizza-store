"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { ICartItem } from "@/interfaces/ICartItem";
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
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  // Initialize cart items from localStorage on client-side only
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: ICartItem) =>
    addToCartAction(item, cartItems, setCartItems);

  const removeFromCart = (item: ICartItem) =>
    removeFromCartAction(item, cartItems, setCartItems);

  const clearCart = () => clearCartAction(setCartItems);

  const getCartTotal = () => getCartTotalAction(cartItems);

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
