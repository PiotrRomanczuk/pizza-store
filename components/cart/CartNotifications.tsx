// notifications.js
import { ICartItem } from "@/interfaces/ICartItem";
import { toast } from "react-toastify";

export const notifyRemovedFromCart = (item: ICartItem) =>
  toast.error(`${item.name} removed from cart!`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#000",
      color: "#fff",
    },
  });

export const notifyCartCleared = () =>
  toast.error(`Cart cleared!`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#000",
      color: "#fff",
    },
  });

export const notifyAddedToCart = (item: ICartItem) =>
  toast.success(`${item.name} added to cart!`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
