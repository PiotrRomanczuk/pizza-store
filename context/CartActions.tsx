import { Dispatch, SetStateAction } from "react";
import { ICartItem } from "@/interfaces/ICartItem";


 // TODO:  Can not delete item from cart when quantity is 1

export const addToCartAction = (
  item: ICartItem,
  cartItems: ICartItem[],
  setCartItems: Dispatch<SetStateAction<ICartItem[]>>,
) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
  console.log('Current cart state:', cartItems);
  console.log('Item being added:', item);
  
  if (existingCartItem) {
    console.log(`Current quantity: ${existingCartItem.quantity}`);
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
    console.log('Updated existing item in cart:', cartItems);
  } else {
    console.log("Adding new item to cart");
    const newCartItems = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(newCartItems);
    console.log('Cart after adding new item:', newCartItems);
  }
};

export const removeFromCartAction = (
  item: ICartItem,
  cartItems: ICartItem[],
  setCartItems: Dispatch<SetStateAction<ICartItem[]>>,
) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
  if (existingCartItem) {
    const updatedCartItems = existingCartItem.quantity === 1
      ? cartItems.filter((cartItem) => cartItem.id !== item.id)
      : cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    
    setCartItems(updatedCartItems);
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
