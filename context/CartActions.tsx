import { Dispatch, SetStateAction } from "react";
import { ICartItem } from "@/interfaces/CartItem";

export const addToCartAction = (
  item: ICartItem,
  cartItems: ICartItem[],
  setCartItems: Dispatch<SetStateAction<ICartItem[]>>,
) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  if (isItemInCart) {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }
};

export const removeFromCartAction = (
  item: ICartItem,
  cartItems: ICartItem[],
  setCartItems: Dispatch<SetStateAction<ICartItem[]>>,
) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  if (isItemInCart && isItemInCart.quantity === 1) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  } else {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      ),
    );
  }
};

export const clearCartAction = (
  setCartItems: Dispatch<SetStateAction<ICartItem[]>>,
) => {
  setCartItems([]);
};

export const getCartTotalAction = (cartItems: ICartItem[]) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};
