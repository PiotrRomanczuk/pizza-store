import { ICartItem } from "./ICartItem";
import { IProduct } from "./IProduct";

export interface ICartActions {
    product: ICartItem;
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    cartItems: ICartItem[];
  }